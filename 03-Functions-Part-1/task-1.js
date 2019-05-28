function f (n) {

    if (typeof n === 'number')
    {
        return n*=n*=n;
    }

    throw new Error('parameter type is not a Number');
};

console.log(f(3));