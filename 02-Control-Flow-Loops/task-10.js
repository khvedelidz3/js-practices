var arr = [3,5,7,8,3,5,6,7,8,12,45];

let n = arr.length;

for (let i = 0; i < n-1; i++){
    for (let j = i + 1; j < n; j++){
        if (arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

for (let item of arr){
    console.log(item);
}