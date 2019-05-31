function getDivisors (a) {

    if (typeof a != 'number') {
        throw Error('parameter type is not a Number');
    }

    if (a === 0) {
        throw new Error('parameter can\'t be a 0');
    }

    let dividers = [];
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            dividers.push(i);
        }
    }

    return dividers;
}

let result = getDivisors(15);

console.log(result);