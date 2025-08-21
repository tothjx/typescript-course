export function LogItem
(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor
{
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`új könyv került a könyvtár állományába`);
        originalMethod.apply(this, args);
    }

    return descriptor;
}
