Object.defineProperty(Object.prototype, 'extend', {

    value(source) {
        for (val in Object.getOwnPropertyDescriptors(source)) {
            Object.defineProperty(this, val, {
                value: Object.getOwnPropertyDescriptors(source)[val].value, 
                writable: Object.getOwnPropertyDescriptors(source)[val].writable,
                enumerable: Object.getOwnPropertyDescriptors(source)[val].enumerable,
                configurable: Object.getOwnPropertyDescriptors(source)[val].configurable
            })
        }
    }
})

const data = { a: 'a' };
const source = { a: 'A', b: 'b' };

Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(Object.getOwnPropertyDescriptors(data))



// console.log(Object.getOwnPropertyDescriptors(source))