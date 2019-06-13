function send(url) {

}

const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

console.log()

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });