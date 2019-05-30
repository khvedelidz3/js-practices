function myFill(a, b) {

    if(!Array.isArray(a) && typeof a !== 'string' && typeof a !== 'number') {
        throw new Error('First parameter required and has to be only number, string, object array');
    }

    if(typeof b !== 'number') {
        throw new Error('Second parameter required and has to be only number');
    }

    let arr=[]
    for (let i = 0; i < b; i++) {
        arr.push(a);
    }

    return arr;
}

var newArr = myFill('x', 5);

console.log(newArr);