import { config as cfg } from "../utils/config";
import { Lang } from "../models/Lang";
import { Where } from "../models/Where";
import { Record } from "../models/Record";
import { table } from 'table';

export class Dictionary
{
    private _dic: Record[];

    constructor()
    {
        this._dic = [];
    }

    public async init(): Promise<void>
    {
        console.log('fetching data...');
        this._dic = await this._fetchData();
    }

    public search(word: string, lang: Lang = Lang.en, where: Where = Where.middle): Record[]
    {
        return this._getResults(word, lang, where);
    }

    public searchRender(word: string, lang: Lang = Lang.en, where: Where = Where.middle): void
    {
        const isEn: boolean = lang === Lang.en;
        const results: Record[] = this._getResults(word, lang, where);

        let tableData = [];

        tableData.push(
            (isEn) ? ['ID', 'EN', 'HU'] : ['ID', 'HU', 'EN']
        );

        results.forEach((item, index) => {
            let rowData = null;
            if (isEn) {
                rowData = [(index + 1), item.en, item.hu];
            } else {
                rowData = [(index + 1), item.hu, item.en];
            }

            tableData.push(rowData);
        });

        console.log(table(tableData, cfg.tableConfig));
    }

    public searchSimpleRender(word: string, lang: Lang = Lang.en, where: Where = Where.middle): void
    {
        const isEn: boolean = lang === Lang.en;
        const results: Record[] = this._getResults(word, lang, where);

        console.table(results);
    }

    public get data(): Record[]
    {
        return this._dic;
    }

    private async _fetchData(): Promise<Record[]>
    {
        const response = await fetch(cfg.API_URL);
        const jsonData: Record[] = await response.json();

        return jsonData;
    }

    private _getResults(word: string, lang: Lang, where: Where = Where.middle): Record[] | []
    {
        let results: Record[] = [];

        if (typeof word == 'undefined' || word.length < cfg.MIN_LENGTH_WORD) {
            return [];
        }

        switch(where) {
            case Where.begin:
                results = this._dic.filter(dic => dic[lang].startsWith(word));
                break;
            case Where.end:
                results = this._dic.filter(dic => dic[lang].endsWith(word));
                break;
            case Where.full:
                results = this._dic.filter(dic => dic[lang] == word);
                break;
            case Where.middle:
            default:
                results = this._dic.filter(dic => dic[lang].includes(word));
        }

        return this._sortResults(results, lang);
    }

    private _sortResults(rows: Record[], lang: Lang = Lang.en): Record[]
    {
        return rows.sort((a, b) => a[lang].localeCompare(b[lang], lang, {sensitivity: 'base'}));
    }
}
