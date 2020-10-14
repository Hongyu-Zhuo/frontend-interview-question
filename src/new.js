//  new操作符
/**
 * new 内部[[constructor]]操作
 * ECMAScript 262 中对 new 的描述
 * 1.  
 */

function new_(F, ...args) {
    if (!(F instanceof Function)) {
        throw new TypeError(`${F} is not a constructor`);
    }
    let proto = Reflect.getPrototypeOf(F);
    if (!(proto instanceof Object)) {
        proto = Object.prototype;
    }
    let obj = Object.create(proto);
    let result = F.apply(obj, args);
    return (result instanceof Object) ? result : obj;
}