// const memo = {'1': 1};

function recursionFactorial(a, memo= {'1': 1}) {
    if (memo[a])
        return memo[a];

    if (a > 1) {
        return memo[a] = a * recursionFactorial(a-1, memo);
    }
}

console.log(recursionFactorial(370));
console.log(recursionFactorial(26));
console.log(recursionFactorial(27));