function isPositive(a) {

    if (typeof a != 'number'){
        throw new Error('parameter type is not a Number');
    }

    if (a >= 0) {
        return true;
    }

    return false;
}

function myFunction (arr) {
    let positiveArr = [];

    for (item of arr) {
        if (isPositive(item)){
            positiveArr.push(item);
        }
    }

    return positiveArr;
}

let arr = [1, 2, -4, 3, -9, -1, 7];

let newArr = myFunction(arr);

console.log(newArr);