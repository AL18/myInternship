// Destructuring.1:
// Avoiding disaster
// This function uses destructuring for argument parsing. But it has a problem:
//     it crashes when the caller passes an option object without an enable property.
//     Since all options have defaults, we'd like to not crash in this case.
//     Can you think of a clean way to fix this problem?
//
// If you also want to allow not passing in an option object at all, how would you solve that?

function go(options) {

    if (!options.enable)
        options.enable = {};


    let {speed = 4,
         enable: {
            hyperdrive = false,
            frobnifier = true
    }} = options;

    console.log("speed =", speed,
        "hyperdrive:", hyperdrive,
        "frobnifier:", frobnifier)
}

go({speed: 5})

