//1. Вывод должен быть 0 ... 9 (3 способа)

for(let i = 0; i < 10; i++ )
    setTimeout(() => console.log(i), 1000)


//2.

for(var i = 0; i < 10; i++ ) {
    (function (e) {
        setTimeout(function () {
            console.log(e);
        }, 1000);
    })(i);
}

//3.

for(var i = 0; i < 10; i++ ) {
    setTimeout((function (e) {
        return function () {
            console.log(e);
        }
    })(i),1000)
}
