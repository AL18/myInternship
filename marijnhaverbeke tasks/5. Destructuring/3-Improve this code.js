// Destructuring.3:
// Improve this code
//
// The detectCollision function searches through an array of rectangles and returns the first rectangle
// that the given point is inside of.
//
//     Use destructuring and a higher-order function to make this code cleaner.
//     You might want to use the new array method find, which takes a function as argument,
//     and returns the first element in the array (the element, not its index)
//     for which the function returns true.

function detectCollision(objects, point) {
    return objects.find(
        ( {x, y, width, height} ) => {

            if (point.x >= x && point.x <= x + width &&
                point.y >= y && point.y <= y + height)

            return true
        }
    );
}

const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]

console.log(detectCollision(myObjects, {x: 4, y: 2}))
