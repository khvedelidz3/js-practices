function checkSpam(str, subStr) {
    if (typeof str !== 'string' || typeof subStr !== 'string') {
        throw new Error('Both parameters should be string')
    }

    return str.toLowerCase().includes(subStr.toLowerCase());
}

let str = 'pitterXXX@gmail.com';
console.log(checkSpam(str, 'xxx')); // true
