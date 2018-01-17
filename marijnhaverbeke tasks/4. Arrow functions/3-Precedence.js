// Arrow functions.3:
// Precedence
//
// Where does an arrow function end? At a closing bracket or semicolon, of course.
//     But does a comma denote the end? Is the body of the function in this example x + y, 0,
//     or just x + y?
//
//     Is there anything else that will end an arrow function body? Experiment.

console.log([1, 2, 3].reduce((x, y) => {
    if(x + y)
        return x - y
}))

//{}, return