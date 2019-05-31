let arr = ['abcd', 'abcde', 'ab', 'abc'];

let newArr = arr.map(function(item) {
    return item.length;
});

console.log(newArr);