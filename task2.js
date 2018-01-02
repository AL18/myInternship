// Развернуть строку. "Hello" --> "olleH"/**
function invertString(str) {
    return str.split('').reverse().join('');
}

console.log(invertString("Hello"));