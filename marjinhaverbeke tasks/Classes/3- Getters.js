// Classes.3:
// Getters
//
// This is the way the solution to the previous exercise might look.
//
// The way the verb property is set per instance rather than per class is kind of awkward
// Refactor the code to use a getter (get verb() { ... }) instead of an instance property.

class Speaker {

    constructor(name, verb = 'says') {
        this.name = name
        this.verb = verb
    }

    speak(text) {
        console.log(`${this.name} ${this.verb} '${text}'`)
    }
}

class Shouter extends Speaker {

    constructor(name) {
        super(name, "shouts")
    }

    get text() {
        return text.toUpperCase();
    }
}

new Shouter("Dr. Loudmouth").speak("hello there")