function f() {
    
    for (item of arguments) {
        if (typeof item != 'number') {
            throw new Error('all parameters type should be a Number');
        }
    }

    let sum = 0;

    for (item of arguments) {
        sum += item;
    }

    return sum;
}

console.log(f(1,2,'b',4,5,6));