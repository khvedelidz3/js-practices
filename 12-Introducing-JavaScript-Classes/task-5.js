class Validator {
    isEmail(str) {
        let last = str.length - 1;
        if (str.includes('@') && str.includes('.')) {
            if (str.indexOf('@') !== 0 &&
                str.indexOf('@') !== last &&
                str.indexOf('.') !== 0 &&
                str.indexOf('.') !== last &&
                str.indexOf('@') < str.lastIndexOf('.')) {
                return true;
            }
        }

        return false;
    }

    isDomain(str) {
        let domain = str.toLowerCase();
        let ending = str.substring(str.lastIndexOf('.'));

        if (domain.includes('.') &&
        domain.indexOf('.') !== 0 &&
        domain.indexOf('.') !== domain.length - 1 &&
        domain.substring(0, 4) === 'www.' &&
        (ending === '.ru' || ending === '.com' || ending === '.org' || ending === '.net')
        ) {
            return true;
        }

        return false;
    }

    isDate(str) {
        let arr = str.split('.');

        if (arr.length === 3 &&
            +arr[1] < 13 && +arr[1] > 0 &&
            +arr[2] > 1945 &&
            +arr[2] <= new Date().getFullYear() &&
            +arr[0] > 0 &&
            +arr[0] < 32 &&
            +arr[0] <= new Date(arr[2], arr[1], 0).getDate()) {
            return true;
        }

        return false
    }

    isPhone(str) {
        let myStr = str;
        let chars = ['+', '(', ')', '-', ' '];
        if (!str.includes('(+995)') ||
            !str.includes('-') ||
            str.indexOf('(') !== 0 ||
            str.indexOf('+') !== 1 ||
            str.indexOf(')') !== 5 ||
            str.indexOf(' ') !== 6
        ){
            return false;
        } else {
            for (let i in str) {
                if (str[+i] === '-' && +i !== 10 && +i !== 13 && +i !== 16) {
                    return false;
                }
            }
        }
        for (let char of chars) {
            myStr = myStr.split(char).join('');
        }

        for(let char of myStr) {
            if(! (char >= '0' && char <= '9')) {
                return false
            }
        }

        return true;
    }
}

let validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('www.jshtml.com'));
console.log(validator.isDate('12.05.2019'));
console.log(validator.isPhone('(+995) 551-43-43-43')); // it can be format of your country
