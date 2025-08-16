const LINE = '================================================================';

export namespace util {
    export function section(msg: string = ''): void
    {
        console.log(`\n${msg}\n${LINE}`);
    }
}
