class Countries {
    constructor(val) {
        if(typeof val !== 'string') {
            throw new Error('Url parameter should be string');
        }

        this.url = val;
    }

    send(size) {
        if(typeof size !== 'number') {
            throw new Error ('Size parameter should be number');
        }
        return new Promise((resolve, reject) => {
            get(this.url+'?size='+size, (error, meta, body) => {
                if (meta.status === 200) {
                    const {data} = JSON.parse(body);
                    resolve(data);
                } else {
                    reject(`We have error, status code: ${meta.status}`)
                }
            });
        });
    }

}

const get = require('fetch').fetchUrl;

const url = 'https://lab.lectrum.io/geo/api/countries';
const countries = new Countries(url);

(async () => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();