1
//обьясни своими словами, что значит callback функция
//?

2
//выведи в консоли 'Привет я Alex и мне 19 лет' с помощью функций ниже и callback
function alertInfo(name, age) {
    console.log//(сообщение);
}

function userInfo() {
    let name = 'Alex';
    let age = 19;
    //код
}

userInfo();

3
//какая из функций является функцией обратного вызова?
setTimeout(showMessage, timeout);

function showMessage() {
    console.log('Сообшение');
    startProgram();
}

function startProgram() {
    console.log('Запуск');
}

4
//передайте функции ниже функцию showMessage  в качестве параметра и вызовите ее
function startProgram() {
    console.log('Запуск');
}

5
//что такое Promise?

6
//создайте Promise функцию?
myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
)

7
//обьясни своими словами, что такое res и rej?
let count1 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});

8
//обьясни своими словами, что такое .then?
let count2 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//обратный вызов в случае успеха и другой в случае неудач

9
//обьясни своими словами, что такое .then?
let count3 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//обратный вызов в случае успеха и другой в случае неудачи.

10
//что значит асинхронный?
//упрощет написание обещаний

11
//что делает async?
//заставляет функцию возвращать обещание

12
//что делает await?
//заставляет функцию ждать обещания