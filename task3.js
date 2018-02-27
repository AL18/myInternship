// function findFactorial(a) {
//     let factorial=1;
//     for (let i=1;i<=a;i++) {
//         factorial *= i;
//     }
//     return factorial;
// }
//
// console.log(findFactorial(4));
const memo = {'1': 1};

function recursionFactorial(a, memo) {
    if (memo[a])
        return memo[a];

    if (a > 1) {
        return memo[a] = a * recursionFactorial(a-1, memo);
    }
}

console.log(recursionFactorial(5,memo));
console.log(recursionFactorial(7,memo));
console.log(recursionFactorial(8,memo));
