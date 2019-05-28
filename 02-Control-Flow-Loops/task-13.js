var arr = [1, 3, -5, 34, -7, -4, 5 ,8], sum = 0;

for (let item of arr) {
    if (item > 0) {
        sum += item;
    }
}

console.log(sum);