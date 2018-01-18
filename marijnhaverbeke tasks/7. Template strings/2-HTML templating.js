// Template strings.2:
// HTML templating

// Write a function html that can be used as a template string tag, and produces a string
// in which all the interpolated pieces are escaped as HTML. Use the supplied escapeHTML
// function to do the escaping.
//
//     Remember that a tag function gets an array of in-between strings as its first argument,
//     and then the interpolated values as further arguments.

function html(strings, ...values) {
    escapeHTML(`${strings} ${values}`)
}

const mustEscape = '<>&"'
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`)

function escapeHTML(string) {
    return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/&/g, "&amp;")
}
