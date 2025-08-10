const LENGTH_NUMBER_DEFAULT = 16;
export function getNumID() {
    let result = '';
    for (let i = 0; i < LENGTH_NUMBER_DEFAULT; i++) {
        let n = (i === 0)
            ? Math.floor(Math.random() * 9) + 1
            : Math.floor(Math.random() * 10);
        result += n.toString();
    }
    return parseInt(result);
}
