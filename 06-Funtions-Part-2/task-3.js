function myMix(...func) {
    for (item of func) {
        if (typeof item !== 'function') {
            throw new Error('All parameters should be an function');
        }
    }

    let prev;
    let n = func.length;
    let response = {
        errors: [],
        value: null
    }

    for (let i = 0; i < n; i++) {
        try {
            prev = func[i](prev);
        } catch (err) {
            let myError = {
                name: err.name,
                message: err.message,
                stack: err.stack,
                level: i
            }
            response.errors.push(myError);
        }
    }

    response.value = prev;
    return response;
}

let result = myMix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
}, (prev) => {
    throw new Error('My error');
});

console.log(result);