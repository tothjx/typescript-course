// tudom h nem tokeletes de nem akartam uuid-t hasznalni
export function getUnid(): string
{
    let d: Date = new Date();
    return `${d.getFullYear()}${d.getMonth()}${d.getDate()}-${d.getHours()}${d.getMinutes()}${d.getSeconds()}-${d.getMilliseconds()}`;
}
