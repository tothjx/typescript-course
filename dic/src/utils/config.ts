const pckg = require('../../package.json');

export namespace config {
    export const APP_ENV = 'dev';
    export const APP_NAME = pckg.name;
    export const APP_DESC = pckg.description;
    export const APP_VERSION = pckg.version;
    export const APP_AUTHOR = pckg.author.name;
    export const APP_EMAIL = pckg.author.email;
    export const API_URL = 'https://api.tothj.com/dic/en.json';
    export const MIN_LENGTH_WORD = 2;

    export const tableConfig = {
        border: {
            topBody: `─`,
            topJoin: `┬`,
            topLeft: `┌`,
            topRight: `┐`,

            bottomBody: `─`,
            bottomJoin: `┴`,
            bottomLeft: `└`,
            bottomRight: `┘`,

            bodyLeft: `│`,
            bodyRight: `│`,
            bodyJoin: `│`,

            joinBody: `─`,
            joinLeft: `├`,
            joinRight: `┤`,
            joinJoin: `┼`
        }
    };
}
