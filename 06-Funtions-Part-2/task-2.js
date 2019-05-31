function myMix(...func) {
    for (item of func) {
        if (typeof item !== 'function') {
            throw new Error('All parameters should be an function');
        }
    }

    let prev;

    for (item of func) {
        prev = item(prev);
    }

    return prev;
}

let result = myMix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
})

console.log(result);