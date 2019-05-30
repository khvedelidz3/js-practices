function myFilter(arr, func) {
    if(!Array.isArray(arr)) {
        throw new Error('First parameter required and has to be only array');
    }

    if(typeof func !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    let filtered = []
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if(func(arr[i], i, arr)) {
            filtered.push(arr[i]);
        }
    }

    return filtered;
}

const arr = [1,2,3];
let newArr = myFilter(arr, function(item, i, arr) {
    return item > 2;
});

console.log(newArr);