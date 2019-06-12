class CreateError extends Error {
}

class ReadError extends Error {
}

class ReadAllError extends Error {
}

class UpdateError extends Error {

}

class DeleteError extends Error {

}

class FindError extends Error {

}

class DB {
    constructor() {
        this.records = new Map();
    }

    create(val) {
        if (!this.isValid('create', val)) {
            throw new CreateError('Invalid parameter is given to create method');
        }

        let id = new Date().valueOf() % 100 + Math.random();
        val.id = id;
        this.records.set(id, val);

        return id;
    }

    read(id) {
        if (!this.isValid('read', id)) {
            throw new ReadError('Parameter is required and it should be string or number')
        }
        if (!this.records.has(+id)) {
            return null;
        }

        return this.records.get(id);
    }

    readAll() {
        if (!this.isValid('readAll', arguments)) {
            throw new ReadAllError('readAll method does not accepts any parameter')
        }

        return Array.from(this.records.values());
    }

    update(id, val) {
        if (!this.isValid('update', arguments)) {
            throw new UpdateError('Invalid parameters')
        }

        this.records.set(id, Object.assign(this.records.get(id), val))
    }

    delete(id) {
        if (!this.isValid('delete', id)) {
            throw new DeleteError('Prameter is required and should be existing id with type of string or number');
        }

        this.records.delete(id);

        return true;
    }

    find(query) {
        if (!this.isValid('find', query)) {
            throw new FindError('Invalid query');
        }

        let properties = Object.getOwnPropertyNames(query);
        let result = [];
        let allRecords = this.readAll();
        allRecords.forEach(record => {
            // console.log(record)
            let matched = true;
            if (query.hasOwnProperty('name') && query['name'] !== record['name']) matched = false;
            if (query.hasOwnProperty('country') && query['country'] !== record['country']) matched = false;
            if (query.hasOwnProperty('age') && query['age'].hasOwnProperty('min') && query['age'].hasOwnProperty('max') && record['age'] < query['age'].min && record['age'] > query['age'].max) {
                matched = false;
            } else if (query.hasOwnProperty('age') && query['age'].hasOwnProperty('min') && record['age'] < query['age'].min) {
                matched = false;
            } else if (query.hasOwnProperty('age') && query['age'].hasOwnProperty('max') && record['age'] > query['age'].max) {
                matched = false;
            }
            if (query.hasOwnProperty('salary') && query['salary'].hasOwnProperty('min') && query['salary'].hasOwnProperty('max') && record['salary'] < query['salary'].min && record['salary'] > query['salary'].max) {
                matched = false;
            } else if (query.hasOwnProperty('salary') && query['salary'].hasOwnProperty('min') && record['salary'] < query['salary'].min) {
                matched = false;
            } else if (query.hasOwnProperty('salary') && query['salary'].hasOwnProperty('max') && record['salary'] > query['salary'].max) {
                matched = false;
            }

            if (matched) {
                result.push(record);
            }
        })

        return result;
    }

    isValid(method, value) {
        if (method === 'create') {
            if (typeof value !== 'object' ||
                Array.isArray(value) ||
                !value.hasOwnProperty('name') ||
                !value.hasOwnProperty('age') ||
                !value.hasOwnProperty('country') ||
                !value.hasOwnProperty('salary') ||
                typeof value.name !== 'string' ||
                typeof value.age !== 'number' ||
                typeof value.country !== 'string' ||
                typeof value.salary !== 'number') {
                return false;
            }

            return true;
        }
        if (method === 'read') {
            if (typeof value !== 'string' && typeof value !== 'number' || value === 'undefined') {
                return false;
            }

            return true;
        }

        if (method === 'readAll') {
            if (value.length !== 0) {
                return false;
            }

            return true
        }

        if (method === 'update') {
            if (value.length !== 2 ||
                typeof value[0] !== 'string' &&
                typeof value[0] !== 'number' ||
                typeof value[1] !== 'object' ||
                Array.isArray(value[1]) ||
                Object.getOwnPropertyNames(value[1]).length === 0) {
                return false;
            } else if (!this.records.has(value[0])) {
                return false;
            } else {
                let properties = Object.getOwnPropertyNames(value[1]);
                let item = this.records.get(value[0]);

                let status = properties.every((property) => {
                    return item.hasOwnProperty(property);
                });

                return status
            }
        }

        if (method === 'delete') {
            if (typeof value === 'undefined' ||
                typeof value !== 'string' &&
                typeof value !== 'number' ||
                !this.records.has(value)) {
                return false
            }

            return true;
        }

        if (method === 'find') {
            if (typeof value !== 'object' &&
                Array.isArray(value)) {
                return false;
            } else {
                let properties = Object.getOwnPropertyNames(value);

                let status = properties.every(property => {
                    if (typeof value[property] === 'object') {
                        return Object.getOwnPropertyNames(value[property]).length > 0 && property === 'salary' || property === 'age';
                    } else {
                        return property === 'name' || property === 'country';
                    }
                })

                return status;
            }
        }
    }

}


let db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};
const person2 = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ru', // required field with type string
    salary: 500 // required field with type number
};
const person3 = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};


const id = db.create(person);
const a = db.create(person2);
const b = db.create(person3);

const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
// db.delete(id); // true
const newCustomers = db.readAll();
// console.log(db.records.keys())
// console.log(customer);
// console.log(customers);
// console.log(newCustomers);

const query = {
    country: 'ge',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 500
    }
};
const findTest = db.find(query); // array of users
console.log(findTest);