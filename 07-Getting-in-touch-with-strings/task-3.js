function truncate(str, maxlength) {
    if (typeof str !== 'string') {
        throw new Error('First parameter should be a string');
    }

    if (typeof maxlength !== 'number') {
        throw new Error('second parameter should be a number');
    }

    if (str.length > maxlength) {
        return str.substring(0, maxlength - 3) + '...';
    }

    return str;
}

console.log(truncate('I wanna to say next thing about this topic', 22));