// Iterators.2:
// Take N
// The integers function creates an infinite iterator, that keeps on producing integers forever.
//
//     Implement the take function, which wraps an iterator in another iterator, but cutting it off after n elements.

function integers() {
    let i = 0
    return {
        next() { return {value: i++} },
        [Symbol.iterator]() { return this }
    }
}

function take(n, iter) {

    return {
        next() {
            let value = iter.next().value

            if (value < n) {
                return {
                    done: false,
                    value: value
                }
            } else return { done: true };
        },
        [Symbol.iterator]() { return this }
    }
}

for (let elt of take(3, integers() ) )
    console.log(elt)
// → 0
//   1
//   2
