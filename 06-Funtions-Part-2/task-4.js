function myCompose(...func) {
    return (a) => {

        let result = a;
        let n = func.length;
        for(i = n - 1; i >= 0; i--) {
            result = func[i](result);
        }

        return result;
    }
}

let res = myCompose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a');

console.log(res);