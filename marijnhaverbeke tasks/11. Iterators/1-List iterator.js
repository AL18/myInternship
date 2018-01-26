// Iterators.1:
// List iterator
// Make the List class (a linked list implementation) iterable by adding a [Symbol.iterator] method.
//
// (Remember: an iterator is an object with a next method that returns {value, done} objects.)

class List {
    constructor(head, tail) {
        this.head = head
        this.tail = tail
    }

    map(f) {
        return new List(f(this.head), this.tail && this.tail.map(f))
    }
}

let list = new List("x", new List("y", new List("z", null)))

// сделаем объект list итерируемым
list[Symbol.iterator] = function() {
    let me = this;
    console.log(this);

    return {
        next() {

            if (me) {
                console.log(me);
                let value = me.head;
                me = me.tail;

                return {
                    done: false,
                    value: value
                };

            } else return {done: true};
        }

    }
};

for (let elt of list) console.log(elt)
// → x
//   y
//   z




