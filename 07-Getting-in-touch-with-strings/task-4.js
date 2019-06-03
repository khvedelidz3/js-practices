function extractCurrencyValue(str) {
    if (typeof str !== 'string') {
        throw new Error('Prameter should be a string')
    }

    return str.substr(1) * 1;
}

console.log(typeof extractCurrencyValue('$120'));