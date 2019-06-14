function send(url) {
    return new Promise((resolve, reject) => {
        get(url, (error, meta, body) => {
            if(error !== null) {
                reject(`Invalid URL: ${url}`)
            }else if(meta.status === 200) {
                const { data } = JSON.parse(body);
                resolve(data);
            } else {
                reject(`We have error, status code: ${meta.status}`)
            }
        });
    })
}

const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });