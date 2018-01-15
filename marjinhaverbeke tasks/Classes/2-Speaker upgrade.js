// Classes.2:
// Speaker upgrade

// Rewrite these two object types to use the class keyword,
// instead of direct prototype manipulation. Speaker is a simple type that exposes a speak method which,
//     when called, logs the given text along with the speaker's name.' +
// ' Shouter is a subtype of Speaker which shouts its text and makes it uppercase.

class Speaker {

    constructor(name, verb = 'says') {
        this.name = name;
        this.verb = verb;
    }

   speak(text) {
        console.log(`${this.name} ${this.verb} '${text}'`)
    }
}

class Shouter extends Speaker
{
    constructor(name, verb) {
        super(name,verb = 'shouts')
    }

    speak(text) {
       super.speak(text.toUpperCase())
    }
}

new Shouter("Dr. Loudmouth").speak("hello there")