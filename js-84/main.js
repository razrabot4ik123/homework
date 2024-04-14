// перейти в строгий режим написания js
// 'use strict'

// // локальная область видимости
// function test() {
//     let foo = null
//     return foo
// }


// // глобальная область видимости
// let foo = 123
// console.log(foo)
// console.log(test())

// const firstNumber = 5
// const secondNumber = 5

// let result = null

// if (firstNumber === secondNumber) {
//     let result = null
//     result = firstNumber + secondNumber
// } else {
//     result = secondNumber - firstNumber
// }
// console.log(result)



// вар не юзать лучше
// const firstNumber = 5
// const secondNumber = 5

// if (firstNumber === secondNumber) {
//     var result = null
//     result = firstNumber + secondNumber
// } else {
//     result = secondNumber - firstNumber
// }

// console.log(result)





// В примере ниже в case нам надо выполнить несколько строчек. Удобно обернуть все операции в блок при помощи фигурных скобок — 
// тогда все переменные и операции будут ограничены этим блоком, то есть блочной областью видимости.

// switch (animalType) {
//     case 'dog': {
//         const legs = 4
//         const species = 'mammal'
//         break
//     }

//     case 'fish': {
//         const legs = 0
//         const swims = true
//         break
//     }
// }