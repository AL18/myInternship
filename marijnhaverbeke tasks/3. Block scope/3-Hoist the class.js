// Block scope.3:
// Hoist the class
//
// This code produces an error. So apparently, unlike functions,
//     classes are not hoisted to the top of their scope.
// (They are block-scoped.)
//
// What could be the reason for this?

let s = new Something()

class Something {}

//Class should be declared above the class instance
