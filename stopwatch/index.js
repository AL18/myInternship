//'use strict'

class Stopwatch {

    startTime = 0;
    lapTime = 0;

    now = function() {
        return(new Date()).getTime();
    }

// Start or resume
    start() {
        this.startTime = this.startTime ? this.startTime : this.now();
    }

// Stop or pause
    stop() {
        this.lapTime = this.startTime ? this.lapTime + this.now() - this.startTime : this.lapTime;
        this.startTime = 0; //Paused
    }

// Reset
    reset() {
        this.lapTime = this.startTime = 0;
    }

// Duration
    time() {
        return this.lapTime + (this.startTime ? this.now() - this.startTime : 0);
    }
}

let x = new Stopwatch();
let $time;
let clocktimer;

function pad(num, size) {
    var s = "0000" + num;
    return s.substr(s.length - size);
}

function formatTime(time) {
    let h = m = s = ms = 0;
    let newTime = '';
    
}