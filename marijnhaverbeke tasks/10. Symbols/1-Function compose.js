// Symbols.1:
// Function compose
//
// Define a symbol compose, and addTask it to Function.prototype,
// with a method that composes the this function with the method's argument,
// returning a new function that applies both composed functions,
// one after the other, to its argument, and returns the result.
let compose = Symbol('compose');

Function.prototype[compose] = function(func) {
    return  a => { return this(func(a)) }
};

let roundedAbs = Math.round[compose](Math.abs)
console.log(roundedAbs(-5.5))
// → 6