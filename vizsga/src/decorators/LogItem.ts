export function LogItem
(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor
{
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`új felhasználó hozzáadva`);
        originalMethod.apply(this, args);
    }

    return descriptor;
}
