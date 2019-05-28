function isEven (a) {

    if (typeof a != 'number') {
        throw new Error('parameter type is not a Number');
    }

    if (a % 2 === 0) {
        return true;
    }

    return false;
}

console.log(isEven(4));