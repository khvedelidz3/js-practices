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

        return id;
    }

    delete(id) {
        if(!this.isValid('delete', id)) {
            throw new DeleteError('Prameter is required and should be existing id with type of string or number');
        }

        this.records.delete(id);

        return true;
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
    country: 'ge', // required field with type string
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
db.update(id, {age: 22}); // id
db.delete(id); // true
const newCustomers = db.readAll();
console.log(db.records.keys())
console.log(customer);
console.log(customers);
console.log(newCustomers);


