// Object literals.2:

// Configurable property

// Fill in the startNode function using a single object literal. The function should return an object
// with type and value properties containing the value of the arguments by those names, and a third property,
//     named by the sourceProperty option,4 set to the value of the sourceValue option.

function startNode(type, value, options) {
    let key = options.sourceProperty
    return {
        type: type,
        value: value,
        [key]: options.sourceValue
    }
}
console.log(startNode("Identifier", "foo", {
    sourceProperty: "src",
    sourceValue: "bar.js"
}))
// → {type: "Identifier",
//    value: "foo",
//    src: "bar.js"}