// Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли):
// 1)
// console.log('1');
// setTimeout(() => console.log('2'), 1);
// let promiseNew = new Promise((resolve) => {
//     console.log('3');
//     resolve();
// });
// promiseNew.then(() => console.log('4'));
// setTimeout(() => console.log('5'));
// console.log('6');
// 1, 3, 6, 4, 5, 2
// Выводится первый синхронный код 1, сеттаймауты сразу уходят в web API, про них забываем. new Promise создается и сразу вовзращает результат, 3.
// promiseNew.then уходит в микротаск, остается 6, которая и вызывается. далее, выполняется микротаск, 4. переходим на макротаски.
// выводится сначала 5 (задержка 0), потом 2 (задержка 1)
//////////////////////////////
// 2)
// let promiseTree = new Promise((resolve, reject) => {
//     resolve("a");
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     }, 0);
//     console.log("3");
// });
// 1, 3, 2
// внутри промиса первым идет 1, сеттаймаут уходит в web API, далее идет синхронный код 3. последним исполняется макротаск 2
/////////////////////////
// 3)
// let promiseTwo = new Promise((resolve, reject) => {
//     resolve("a");
// });
// promiseTwo
//     .then((res) => {
//         return res + "b";
//     })
//     .then((res) => {
//         return res + "с";
//     })
//     .finally((res) => {
//         return res + "!!!!!!!";
//     })
//     .catch((res) => {
//         return res + "d";
//     })
//     .then((res) => {
//         console.log(res);
//     });
// abc
// передаем результат исполнения "а" следующему then. далее, (ab) передается результатом следующему then (abc). finally исполняется, но ничего не присваивает.
// catch игнорируется, т.к. у нас промисс в состоянии выполнения. последний then выводит получившийся результат (abc)
/////////////////////////////
// 4)
// function doSmth() {
//     return Promise.resolve("123");
// }
// doSmth()
//     .then(function (a) {
//         console.log("1", a); //
//         return a;
//     })
//     .then(function (b) {
//         console.log("2", b);
//         return Promise.reject("321");
//     })
//     .catch(function (err) {
//         console.log("3", err);
//     })
//     .then(function (c) {
//         console.log("4", c);
//         return c;
//     });
// 123, 123, 321, undefined
// первая функция возвращает результат промисса (123)
// вторая функция возвращает результат предыдущего then (123), потому что Promise.reject("321") исполняется в состоянии Rejected
// этот Rejected переходит в блок обработки ошибок catch, где и выводится его результат 321
// 4-ая функция не исполнится, т.к. предыдущим результатом было выполнение блока catch. станет undefined
///////////////////////////
// 5)
// console.log("1");
// setTimeout(function () {
//     console.log("2");
// }, 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");
// 1, 4, 3, 2
// вывод синхронного кода 1, сеттаймаут уходит в web API, промисс будет микротаском. выводится следующий синхронный код, 4
// возвращается микротаск и исполняется 3, исполняется макротаск 2
////////////////////////////
//7)
// async function a() {
//   console.log("a");
// }

// console.log("1");

// (async function () {
//   console.log("f1");
//   await a();
//   console.log("f2");
// })();
// console.log("2");
// 1, f1, a, 2, f2
// function a(), асинхронная и ждет исполнения. выводится синхронный код - 1. внутри IIFE выводится первый f1.
// наткнулись на await, исполняем его (т.к. пока await не исполнится, код дальше не пойдет), вызываем функцию a(), выводим - a.
// выводим синхронный код - 2, остается f2 внутри IIFE.
////////////////////////////////
//8)
// console.log(1);

// setTimeout(() => console.log(2));

// async function func() {
//   console.log(3);

//   await new Promise((resolve) => {
//     console.log(4);
//     resolve();
//     console.log(5);
//   })
//     .then(() => console.log(6))
//     .then(() => console.log(7));

//   console.log(8);
// }

// setTimeout(() => console.log(9));

// func();

// console.log(10);
// 1, 3, 4, 5, 10, 6, 7, 8, 2, 9
///////////////////////////////////
// 9)*
// function foo(callback) {
//     setTimeout(() => {
//         callback('A');
//     }, Math.random() * 100);
// }
// function bar(callback) {
//     setTimeout(() => {
//         callback('B');
//     }, Math.random() * 100);
// }
// function baz(callback) {
//     setTimeout(() => {
//         callback('C');
//     }, Math.random() * 100);
// }

// function abc() {
//   return new Promise(res =>
//     foo(res)) // возвращаем новый промисс, где результатом выполнение будет foo(res)
//     .then(result => console.log(result)) // сразу выводим содержимое foo()
//     .then(() => new Promise(res => bar(res))) // создаем новый промисс для bar()
//     .then(result => console.log(result)) // выводим результат bar()
//     .then(() => new Promise(res => baz(res))) // создаем новый промисс для baz()
//     .then(result => console.log(result)) // также выводим результат baz()
//   }

// abc()

// Написать функцию, чтобы починить последовательность выполнения A,B,C без использования колбэк хэлла
// в функциях foo, bar,baz запрещено что-либо менять
// подсказка: нужны промисы =))

///////////////
// todo Объяснить код, рассказать какие консоли и в какой последовательности будут, а затем переписать его на промисы
function resolveAfter2Seconds(x) {
    console.log(`Какой Х пришёл -> ${x}`)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x); //
        }, 5000);
    });
}
// async function add1(x) {
//     console.log('add1 Hello')
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     console.log('add1 Bye')
//     return x + a + b;
// }
// add1(10).then(console.log);

// вызываем функцию add1, внутри функции выводится первым синхронный код add1 Hello.
// ожидаем разрешения исполнения кода от await и передаем 20 в аргумент функции. вовзвращается промис и 20 выводится через 5 секунд
// переходим ко второму await и передаем 30 в аргумент функции. вовзвращается промис и 30 выводится также через 5 секунд
// после разрешения второго промисса, исполняется синхронный код add1 Bye
// функция add1(10) возвращает итоговый результат 10 + 20 + 30 и выводим в консоль 60

// можно применить метод .all(), который возвращает все удачные промиссы.
function addPromise(x) {
  console.log('add1 Hello')
  return Promise.all([resolveAfter2Seconds(20), resolveAfter2Seconds(30)])
    .then((result) => x + result[0] + result[1]) // здесь будет задерджка в 5 секунд
    .then(console.log('add1 Bye'))
}

addPromise(10).then(console.log);
