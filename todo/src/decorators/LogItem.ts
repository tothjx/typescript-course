export function LogItem
(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void
{
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Új bejegyzés hozzáadva...`);
        originalMethod.apply(this, args);
    }
}
