// //1
// const user = {
//     name: 'Bob',
//     funcFunc() {
//         return function() {
//             console.log(this);
//         }
//     },
//     funcArrow() {
//         return () => {
//             console.log(this);
//         }
//     },
//     arrowFunc: () => {
//         return function() {
//             console.log(this);
//         }
//     },
//     arrowArrow: () => {
//         return () => {
//             console.log(this);
//         }
//     },
// };
//
// user.funcFunc()(); // ?
// user.funcArrow()(); // ?
// user.arrowFunc()(); // ?
// user.arrowArrow()(); // ?

// 2
// var poke1 = {name:'Pikachu'};
// var poke2 = {name:'Chermander'};
// var poke3 = {name:'Bulbasaur'};
//
// var sayName = function(){ console.log(this.name) }
//
// sayName.bind(poke1).bind(poke2).call(poke3);


// 3
// const obj = {
//     firstName: 'Bill',
//     lastName: 'Ivanov',
//
//     showFirstName: function () {
//         console.log(this.firstName);
//     },
//
//     showLastName: () => {
//         console.log(this.lastName);
//     }
// }
//
// obj.showFirstName(); // ?
// obj.showLastName(); // ?=
//
// obj.showFirstName.bind({ firstName: 'Boris' })(); // ?
// obj.showFirstName.bind({ firstName: 'Boris' }).bind({ firstName: 'Oleg' })(); // ?
//
// obj.showLastName.bind({ lastName: 'Boris' })(); // ?

// 4

// const user = {
//     name: 'Mike',
//     fn: function () {
//         console.log(this.name)
//     }
// }
//
// setTimeout(user.fn, 1000)



// Что будет выведено в консоль после истечения таймаута и почему?
// Сделайте так, чтоб починить и выводило "Mike"

// Подсказка - ответ найдете в 5 ссылке README

// 5
//Исправьте cтроку(***), чтобы всё работало (других строк изменять не надо, кроме password, чтобы проверить if else).
//
// function askPassword(ok, fail) {
//   let password = 'rockstar2'
//   if (password == "rockstar") ok();
//   else fail();
// }
//
// let user = {
//   name: 'Вася',
//
//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },
//
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
//
// };
//
// askPassword(user.loginOk, user.loginFail) //***;
