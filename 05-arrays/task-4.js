function mySome(arr, func) {

    if(!Array.isArray(arr)) {
        throw new Error('First parameter required and has to be only array');
    }

    if(typeof func !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if(func(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
}

const arr = [1, 2, 3];

let status = mySome(arr, function(item, i, arr) {
    return item > 2;
});

console.log(status);