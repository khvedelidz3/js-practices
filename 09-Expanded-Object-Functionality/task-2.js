Object.defineProperty(Object.prototype, 'mergeDeepRight', {

    value(source) {
        let properties = Object.getOwnPropertyNames(source);

        properties.forEach((property) => {
            if (typeof source[property] === 'object' && !Array.isArray(source[property])) {
                if(!this.hasOwnProperty(property)){
                    this[property]={}
                };
                this[property].mergeDeepRight(source[property]);
            } else if(Array.isArray(source[property])){
                this[property] = [];
                source[property].forEach((item, index)=> {
                    if(typeof item === 'object') {
                        this[property].push({})
                        this[property][this[property].length - 1].mergeDeepRight(item)
                    }else {
                        this[property].push(item)
                    }
                })
            }else {
                this[property] = source[property]
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

const source = {
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip', {name: 'test', test:{test2:'test2'}}, 'last one']
        }
    },
    test: {
        tes2: 'test text',
    }
};

data.mergeDeepRight(source);

console.log(data);