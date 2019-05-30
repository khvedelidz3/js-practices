function myReverse(arr) {

    if(!Array.isArray(arr)) {
        throw new Error('First parameter required and has to be only array');
    }

    if(arr.length === 0) {
        throw new Error('Empty array is forbiden');
    }

    let n = arr.length;
    for (let i = 0, j=n-1; ; i++, j--) {  
        if(i>=j) break;

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

const arr = [6,5,4,3,2,1,0];

console.log(myReverse(arr));