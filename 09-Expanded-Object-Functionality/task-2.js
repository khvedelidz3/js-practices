Object.defineProperty(Object.prototype, 'mergeDeepRight', {

    value(source) {
        let properties = Object.getOwnPropertyNames(source);

        properties.forEach((property) => {
            if (typeof source[property] === 'object' && !Array.isArray(source[property])) {
                if(!this.hasOwnProperty(property)){
                    this[property]={}
                };
                this[property].mergeDeepRight(source[property]);
            } else {
                this[property] = source[property];
            }
        })
    }
});

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    },
    test: {
        tes2: 'test text',
    }
});

console.log(data)
