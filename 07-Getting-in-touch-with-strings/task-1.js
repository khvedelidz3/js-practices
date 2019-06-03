function upperCaseFirst(str) {
    if (typeof str !== 'string') {
        throw new Error('Parameter should be only string');
    }

    return str.charAt().toUpperCase() + str.substring(1);
}

let test = upperCaseFirst('pitter');
// let test = upperCaseFirst('');

console.log(test);

let str = 'dasdasdasdfg';
