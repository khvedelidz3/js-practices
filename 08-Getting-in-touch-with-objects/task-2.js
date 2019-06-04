const person = {};

Object.defineProperties(person, {
    rate: {
        value: 0,
        writable: true,
        configurable:false,
        enumerable:false
    },

    salary: {
        get() {
            let currentDay = new Date().getDate();
            return currentDay * this.rate;
        },

        set() {
            throw new Error(`You can't set`);
        }
    }
});

person.rate = 30;

console.log(person.salary);