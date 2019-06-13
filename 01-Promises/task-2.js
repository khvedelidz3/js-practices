function getCustomers(customers, countries) {
    for(customer of customers) {
        if (!countries.some((country) => customer.id === country.id)) {
            return Promise.reject(`We don't have information about country for this customer: ${customer.name}`);
        }
    }

    customers.forEach(customer => {
        countries.forEach(country => {
            if (customer.id === country.id && customer.hasOwnProperty('verified') && customer.verified === true) {
                Object.assign(customer, country);
            }
        })
    })

    return Promise.resolve(customers);
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