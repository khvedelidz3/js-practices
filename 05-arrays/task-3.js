function myEvery(arr, func) {

    if(!Array.isArray(arr)) {
        throw new Error('First parameter required and has to be only array');
    }

    if(typeof func !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if(!func(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

const arr = [1, 2, 3];

let status = myEvery(arr, function(item, i, arr) {
    return item > 1;
});

console.log(status);