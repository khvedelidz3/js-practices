function f (arr) {

    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an array');
    }

    if (arr.length === 0) {
        throw new Error('parameter can\'t be an empty');
    }
    let i = arr.length;
    function rec (i) {
        if(arr[i] === 'undefined') return;
        console.log(arr[i]);
        i--;
        rec(i);
    }

}


f([1,2,3]);