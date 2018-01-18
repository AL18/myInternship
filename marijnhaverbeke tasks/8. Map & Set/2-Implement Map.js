// Map & Set.2:
// Implement Map
//
// Implement your own version of Map, without actually using Map.
//     I know I said this did not exist,
//     but the catch is that you don't have to worry about algorithmic complexity
//     looking up a value in a big map can be as slow as it needs to be.
//
// Implement at least these methods/getters:
//
// set(key, value)
// Store the given value under the given key.
// get(key)
// Get the value of the given key.
// delete(key)
// Remove the given key from the map.
//     get size()
// Get the amount of keys stored in the map.
// clear()
// Remove all keys from the map.

class MyMap {
    constructor() {
        this.store = {}
    }

    set(key, value) {
        this.store[key] = value;
    }

    get(key) {
        return this.store[key]
    }

    delete(key) {
        delete this.store[key]
    }

    get size() {
        let count = 0;
        for (let key in this.store){
            count++;
        }
        return count;
    }

    clear() {
        for (let key in this.store) {
            delete this.store[key]
        }
    }

}

const names = new MyMap
names.set(Array, "the array constructor")
names.set(Math, "the math object")

console.log(names.get(Array))
// → "the array constructor"
console.log(names.size)
// → 2
names.delete(Array)
console.log(names.get(Array))
// → undefined
names.clear()
console.log(names.get(Math))
// → undefined