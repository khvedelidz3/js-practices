function f(a) {
    if (a > 7 || a < 1) {
        throw new Error('parameter should be in the range of 1 to 7');
    }

    switch(a) {
        case 1:
            return 'Orshabti';
        case 2:
            return 'Samshabati';
        case 3:
            return 'Otkhshabati';
        case 4: 
            return 'Khutshabati';
        case 5: 
            return 'Paraskevi';
        case 6:
            return 'Shabati';
        case 7 : 
            return 'Kvira';

        default:
            throw new Error ('parameter type is not a Number');
    }
}

console.log(f(1));