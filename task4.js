function fibonacci(x) {
    let a=1, b=1;
    for (i=3;i<=x;i++) {
        let c = a + b;
        a=b; b=c;
    }
    return b;
}

console.log(fibonacci(7));