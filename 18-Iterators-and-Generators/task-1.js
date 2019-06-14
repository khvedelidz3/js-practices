class Customers {
    constructor() {
        this.customers = [];
    }

    [Symbol.iterator]() {
        let customers = this.customers.filter(item => {
            return item.verified;
        });
        let i = 0;
        return {
            next() {
                const done = i >= customers.length;
                const value = !done ? customers[i++] : undefined;

                return {
                    value,
                    done
                }
            }
        }
    }

    add(item) {
        if (typeof item !== 'object' || !item.hasOwnProperty('name') || typeof item.name !== 'string') {
            throw new Error('Ivalid parameter')
        }
        this.customers.push(item);
    }
}

const customers = new Customers();
customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });

// console.log(customers.customers)

for (const customer of customers) {
    console.log(customer);
}

// console log
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }