var arr = [1,2,3,4], sum = 0;

for (let item of arr){
    if (item % 2 === 0 && item > 3){
        sum+=item;
    }
}

console.log(sum);