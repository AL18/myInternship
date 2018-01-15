// Arrow functions.2:
// Sorted array
//
// The code for this exercise implements a wrapper for working with sorted arrays.
//     Its constructor takes a comparison function that compares two elements and returns a number,
//     negative if the first is less than the second, zero when they are equal,
//     and positive otherwise (similar to what the sort method on arrays expects).
//
// Rewrite the code to use an ES6 class. Then, rewrite the loop to use the ES6 array method findIndex,
//     which is like indexOf, but takes a function instead of an element as argument,
//     and returns the index of the first element for which that function returns true
// (or returns -1 if no such element was found). For example [1, 2, 3].findIndex(x => x > 1) yields 1.
// Use arrow functions for all function expressions.

class SortedArray {
    constructor(compare) {
        this.compare = compare
        this.content = []
    }

    insert(elt) {
        this.content.splice(this.findIndex( (elt, index, array) => {
                let a = elt;
                let b = array[index+1];
            return a > b ? -1 : 1

        }), 0, elt)
    }
}

let sorted = new SortedArray(function(a, b) { return a - b })
sorted.insert(5)
sorted.insert(1)
sorted.insert(2)
sorted.insert(4)
sorted.insert(3)
console.log("array:", sorted.content)
