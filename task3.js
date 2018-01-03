// function findFactorial(a) {
//     let factorial=1;
//     for (let i=1;i<=a;i++) {
//         factorial *= i;
//     }
//     return factorial;
// }
//
// console.log(findFactorial(4));
let factorial = 1;

function recursionFactorial(a) {
    if (a > 1) {
        factorial *= a;
        recursionFactorial(--a);
    }
    return factorial;
}

console.log(recursionFactorial(4));