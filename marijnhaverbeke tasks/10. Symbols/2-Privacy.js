// Symbols.2:
// Privacy
//
//  Change the Queue class to use a symbol instead of an
//  underscore-prefixed property name for the private content property.
let content = Symbol.for("content");

class Queue {
    constructor() {
        this[content]= []
    }
    put(elt) {
        return this[content].push(elt)
    }
    take() {
        return this[content].shift()
    }
}

let q = new Queue
q.put(1)
q.put(2)
console.log(q.take())
console.log(q.take())

console.log( Object.keys(q) )
console.log( q[Symbol.for('content')] )