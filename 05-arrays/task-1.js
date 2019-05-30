function myForEach(arr, func) {

    if(!Array.isArray(arr)) {
        throw new Error('First parameter required and has to be only array');
    }

    if(typeof func !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    let n = arr.length;
    for (let i = 0; i < n; i++) {
        func(arr[i], i, arr);
    }
}

const arr = [1, 2, 3];

myForEach(arr, function (item, i, arr) {
    console.log(item);
    console.log(i);
    console.log(arr);
});