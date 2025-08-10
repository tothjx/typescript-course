const LENGTH_NUMBER_DEFAULT: number = 16;

export function getNumID(): number
{
    let result: string = '';

    for (let i: number = 0; i < LENGTH_NUMBER_DEFAULT; i++) {
        let n: number = (i === 0)
            ? Math.floor(Math.random() * 9) + 1
            : Math.floor(Math.random() * 10);
        result += n.toString();
    }

    return parseInt(result);
}
