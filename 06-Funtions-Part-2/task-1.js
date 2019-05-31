function myBind(func, obj, ...n) {
    return () => func.call(obj, ...n)
}

const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};

const getName = obj.getName;

const f = myBind(getName, {name: 'Pitter'}, 'My name');

console.log(f());