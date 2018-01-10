//'use strict'
displayDial();

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
    let s = "0000" + num;
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

    displayDial(m,s);
    newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);

    return newTime;
}

function show() {
    $time = document.getElementById('time');
    update();
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

function displayDial(min = 0, sec = 0) {
    let canvasHTML = document.getElementById('dial');
    let contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeRect(0, 0, canvasHTML.width, canvasHTML.height);

// Расчет координат центра и радиуса
    let radiusClock = canvasHTML.width / 2 - 10;
    let xCenterClock = canvasHTML.width / 2;
    let yCenterClock = canvasHTML.height / 2;

// Очистка экрана
    contextHTML.fillStyle = '#ffffff';
    contextHTML.fillRect(0, 0, canvasHTML.width, canvasHTML.height);

// Kонтур часов
    contextHTML.stokeStyle = '#000000';
    contextHTML.lineWidth = 1;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.stroke();
    contextHTML.closePath();

// Рисочки часов
    let radiusNum = radiusClock - 10; // Радиус расположения рисочек
    let radiusPoint;
    for ( let tm = 0; tm < 60; tm++ ) {
        contextHTML.beginPath();
        if (tm % 5 == 0) {
            radiusPoint = 5;
        } // Для выделения часовых рисочек
        else {
            radiusPoint = 2;
        }

        let xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * ( Math.PI / 180 ) + Math.PI / 2);
        let yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * ( Math.PI / 180 ) + Math.PI / 2);

        contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
        contextHTML.stroke();
        contextHTML.closePath();
    }

// Оцифровка циферблата часов
    for ( let th = 1; th <= 12; th++ ) {
        contextHTML.beginPath();
        contextHTML.font = 'bold 25px sans-serif';

        let xText = xCenterClock + (radiusNum - 30) * Math.cos( -30 * th * ( Math.PI / 180 ) + Math.PI/2);
        let yText = xCenterClock - (radiusNum - 30) * Math.sin( -30 * th * ( Math.PI / 180 ) + Math.PI/2);

        if ( th <= 9 ) {
            contextHTML.strokeText(th*5, xText - 12, yText + 10);
        } else {
            contextHTML.strokeText(th*5, xText - 18, yText + 10);
        }
    }
    contextHTML.stroke();
    contextHTML.closePath();


// Рисуем стрелки
    let lengthSeconds = radiusNum - 10;
    let lengthMinutes = radiusNum - 25;
    let d = new Date();
    let t_sec = 6 * sec;
    let t_min = 6 * ( min + ( 1/60 ) * sec );

// Рисуем минуты
    contextHTML.beginPath();
    contextHTML.strokeStyle = '#000000';
    contextHTML.lineWidth = 4;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthMinutes * Math.cos (Math.PI / 2 - t_min * ( Math.PI / 180 ) ),
        yCenterClock - lengthMinutes * Math.sin( Math.PI / 2 - t_min * ( Math.PI/180 ) ) );
    contextHTML.stroke();
    contextHTML.closePath();


// Рисуем секунды
    contextHTML.beginPath();
    contextHTML.lineWidth = 2;
    contextHTML.strokeStyle = '#FF0000';
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo( xCenterClock + lengthSeconds * Math.cos( Math.PI / 2 - t_sec * (Math.PI / 180 ) ),
        yCenterClock - lengthSeconds * Math.sin( Math.PI / 2 - t_sec * ( Math.PI / 180 ) ) );
    contextHTML.stroke();
    contextHTML.closePath();



// Рисуем центр часов
    contextHTML.beginPath();
    contextHTML.strokeStyle = '#000000';
    contextHTML.fillStyle = '#ffffff';
    contextHTML.lineWidth = 3;
    contextHTML.arc(xCenterClock, yCenterClock, 5, 0, 2 * Math.PI, true);
    contextHTML.stroke();
    contextHTML.fill()
    contextHTML.closePath();


    return;
}



