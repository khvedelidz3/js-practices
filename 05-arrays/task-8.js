function fun(arr) {

    function rec(arr) {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                sum += rec(arr[i]);
            } else {
                sum += arr[i];
            }
        }

        return sum;
    }

    return rec(arr);
}

let arr = [1, 2, [1, 5], [1, 2]];

let a = fun(arr);
console.log(a);