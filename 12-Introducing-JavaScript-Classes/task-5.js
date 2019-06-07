class Validator {
    constructor() {

    }

    isEmail(str) {
        let last = str.length - 1;
        if (str.includes('@') && str.includes('.')) {
            if (str.indexOf('@') !== 0 &&
                str.indexOf('@') !==
                last &&
                str.indexOf('.') !== 0 &&
                str.indexOf('.') !==
                last &&
                str.indexOf('@') < str.indexOf('.')) {
                return true;
            }
        }

        return false;
    }

    isDomain(str) {
        if (str.includes('.') && str.indexOf('.') !== 0 && str.indexOf('.') !== str.length - 1) {
            return true;
        }

        return false;
    }

    isDate(str) {
        let arr = str.split('.');

        if (arr.length === 3 && +arr[1] < 13 && +arr[1] > 0 && +arr[2] > 1945 && +arr[2] <= new Date().getFullYear() && +arr[0] > 0 && +arr[0] < 32) {
            if (arr[0] <= new Date(arr[2], arr[1], 0).getDate()) {
                return true;
            }
        }

        return false
    }

    isPhone(str) {
        let myStr = str
        let replace = ['+', '(', ')', '-', ' ']
        for(let char of replace) {
            myStr = myStr.replace(char, '');
        }
        console.log(myStr)
        let number = str.replace()
    }
}

let validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2019'));
console.log(validator.isPhone('(+995) 551-43-43-43')); // it can be format of your country