const LENGTH_DEFAULT: number = 32;

export function getID(length: number = LENGTH_DEFAULT): string
{
    let out: string = '';
    let characters: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (length < 4 || length > 64) {
        length = LENGTH_DEFAULT;
    }

    for (let i = 0; i <= length - 1; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        out += characters.substring(randomNumber, randomNumber + 1);
    }

    return out;
}
