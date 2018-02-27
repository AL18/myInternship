export default class Stopwatch {

    constructor() {
        this.startTime = 0;
        this.lapTime = 0;
    }

    now () {
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

