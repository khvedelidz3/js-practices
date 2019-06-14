function getCustomers(customers, countries) {
    for(customer of customers) {
        if (!countries.some((country) => customer.id === country.id)) {
            return Promise.reject(`We don't have information about country for this customer: ${customer.name}`);
        }
    }

    let result = [];

    customers.forEach(customer => {
        countries.forEach(country => {
            if (customer.id === country.id && customer.hasOwnProperty('verified') && customer.verified) {
                Object.assign(customer, country);
                result.push(customer);
            }
        })
    })

    return Promise.resolve(result);
}

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex',
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))