function myReduce(arr, func, acc) {

    if(!Array.isArray(arr)) {
        throw new Error('First parameter required and has to be only array');
    }

    if(typeof func !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    if(typeof acc !== 'number' && typeof acc !== 'string') {
        throw new Error('Third parameter required and has to be only string or number');
    }

    let n = arr.length;
    for (let i = 0; i < n; i++) {
        acc = func(acc, arr[i], i, arr);
    }

    return acc;
}

// const arr = [1, 2, 3];
const arr = ['a', 'b', 'c'];

let result = myReduce(arr, function(acc, item, i, arr) {
    return acc + item;
}, 'test');

console.log(result);