import { Lang } from "./models/Lang";
import { Where } from "./models/Where";
import { Dictionary } from "./services/Dictionary";

(async () => {
    let dic = new Dictionary();
    await dic.init();

    // console.log(dic.search('alma', Lang.hu, Where.begin));
    // console.log(dic.search('fuck', Lang.en));
    // dic.searchRender('app');
    // dic.searchRender('körte', Lang.hu);
    // dic.searchRender('néz', Lang.hu);
    // dic.searchSimpleRender('körte', Lang.hu);
    dic.searchSimpleRender('állhat', Lang.hu);
    
})();
