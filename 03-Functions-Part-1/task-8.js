function f (arr) {

    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an array');
    }

    if (arr.length === 0) {
        throw new Error('parameter can\'t be an empty');
    }

    let i = 0;
    let n = arr.length;
    function rec () {
        if(i === n) return;
        console.log(arr[i]);
        i++;
        rec();
    }

    rec();
}


f([1,2,3]);