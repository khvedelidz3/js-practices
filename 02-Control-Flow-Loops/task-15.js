let n = 1000, num = 0;

while (n > 50){
    n/=2;
    num++;
}

console.log('Number = ' + n*2 + '\nIteration count = ' + --num);