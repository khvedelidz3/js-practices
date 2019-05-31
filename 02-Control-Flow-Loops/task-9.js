let primeNumbers = [2];

for (let i = 3; i <= 10; i++) {
    let count = 0;

    for (let primeNumber of primeNumbers){
        if (i % primeNumber === 0){
            count++;
            break;
        }
    }

    if (count ===0){
        primeNumbers.push(i);
    }
}

for (let primeNumber of primeNumbers){
    console.log(primeNumber);
}