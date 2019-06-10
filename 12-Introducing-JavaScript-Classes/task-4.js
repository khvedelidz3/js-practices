class MyString {
    constructor() {

    }

    reverse(str) {
        let n = str.length-1;
        let newStr = '';
        // return str.split('').reverse().join('');
        for(let i = n; i >= 0; i--) {
            newStr += str[i];
        }

        return newStr;
    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        let arr = str.split(' ');
        arr = arr.map((item) => {
            return item.charAt(0).toUpperCase() + item.slice(1);
        })
        return arr.join(' ');
    }
}

let str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'