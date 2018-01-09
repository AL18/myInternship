//'use strict'

class Stopwatch {

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

let x = new Stopwatch();
let $time;
let clocktimer;
let flag = true;
let $start = document.getElementById('start');
let split_output = document.getElementById('split_output');
let $split = document.getElementById('split');



function pad(num, size) {
    var s = "0000" + num;
    return s.substr(s.length - size);
}

function formatTime(time) {
    let h = m = s = ms = 0;
    let newTime = '';

    h = Math.floor( time / ( 60*60*1000 ) );
    time = time % (60*60*1000);
    m =  Math.floor( time / ( 60*1000 ) );
    time = time % (60 * 1000 );
    s = Math.floor( time / 1000 );
    ms = time % 1000;

    newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
    return newTime;
}

function show() {
    $time = document.getElementById('time');
    update;
}

function update() {
    $time.innerHTML = formatTime(x.time())
}

function start() {
    flag = false;
    $start.value = 'Pause';
    clocktimer = setInterval(update, 1);
    $split.disabled = false;
    x.start();
}

function stop() {
    flag = true;
    $start.value = ' Start ';
    x.stop();
    clearInterval(clocktimer);
    $split.disabled = true;
}

function reset() {
    stop();
    x.reset();
    update();
    split_output.innerHTML = '';
    $split.disabled = true;
}

function check() {
    flag ?  start() : stop();
}

function split() {

    if(split_output.children.length > 3) {
        split_output.lastChild.innerText = 'Lap: ' + formatTime(x.time());
    }
    else {
        let div = document.createElement('div');
        div.innerText = 'Lap: ' + formatTime(x.time());
        split_output.appendChild(div);
    }
}
