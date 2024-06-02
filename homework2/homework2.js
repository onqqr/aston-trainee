//Как исправить "одни пятёрки"?

var result = [];
for (var i = 0; i < 5; i++) {
  (function(j) {
    result[j] = function () {
      console.log(j)
  }
  })(i)
}
result[0](); //5
result[1](); //5
result[2](); //5
result[3](); //5
result[4](); //5

//////////////////////////////////////////////////

function getGroup() {
    let students = [];
    let i = 0;
    while (i < 10) {
        students[i] = (function(j) {
          return function() {
            console.log(j);
          }
        })(i)
        i++
    }

    return students;
}

let group = getGroup();

group[0](); // 10 как исправить на 0
group[5](); // 10                  5

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

function multiply(x) {
  let result = x
  function carry(...args) {
    if (args.length === 0) {
      return result
    } else {
      result *= args[0]
      return carry
    }
  }
  return carry
}

const result1 = multiply(2)(3)(4)(8)();
console.log(result1); // Вывод: 24
const result2 = multiply(2)(3)(4)(5)();
console.log(result2); // Вывод: 120

// const result1 = multiply(2)(3)(4);

// // Пример использования:
const result3 = multiply(2)(4)();
console.log(result1); // Вывод: 8

const result4 = multiply(5)(2)(3)();
console.log(result2); // Вывод: 30

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

function getUniqArray(arr) {
  if (!Array.isArray(arr) || arr.some(item => typeof item != 'number')) {
    console.log('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел')
  } else {
    return Array.from(new Set(arr))
  }
}

// const arr1 = [1, 1, 4, 5, 5, 6]
// getUniqArray(arr1)

// const arr2 = [1, 2, '3', 5, 5, 6, 7, '7']
// getUniqArray(arr2)

const arr3 = [1, 1, 1, 1, 1, 34]
getUniqArray(arr3)
