// функция
// function sumNumbers () {
//     return 5 + 5
// }
// вызов функции
// const result = sumNumbers()
// console.log(result)


// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }
// const result = sumNumbers(3, 10)
// console.log(result)
// console.log(sumNumbers(-2, 2))





//обычная функция 
// const users = ['John', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]


// function checkForCopyItem(array, item) {
//     for(let i = 0; i < users.length; i++) {
//         if (array[i] === item) {
//             return `В массиве имеется элемент ${item}`
//         }
//     }
//     return `Этого элемента нет в массиве`
// }

// console.log(checkForCopyItem(users, 'Alex'))
// console.log(checkForCopyItem(numbers, 2))
// console.log(checkForCopyItem(numbers, 5))




// const users = ['John', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]


// const checkForCopyItem = (array, item) => {
//     for(let i = 0; i < users.length; i++) {
//         if (array[i] === item) {
//             return `В массиве имеется элемент ${item}`
//         }
//     }
//     return `Этого элемента нет в массиве`
// }

// console.log(checkForCopyItem(users, 'Alex'))
// console.log(checkForCopyItem(numbers, 2))
// console.log(checkForCopyItem(numbers, 5))



// домашнее задание
// function helloYourName(name) {
//         return `Hello ${name}`
// }

// console.log(helloYourName('Matvey'))


// если можно сделать короче или проще, то мне интересно как, УРАААА Я СДЕЛАЛ ==================================================================================================================
// const numbers = [1, 2, 3, 4, 22, 6, 7, 8, 9, 10, 123, 125, 654, 34, 87, 91, 53, 54, 68, 64]

// function arrayNumbersMoreThanTen(arrayNumbers) {
//     for (let i = 0; i < arrayNumbers.length; i++) {
//         if (arrayNumbers[i] > 10) {
//             console.log(`${arrayNumbers[i]} это число больше 10`)
//         }
//     }
// }
// консоль не надо
// console.log(arrayNumbersMoreThanTen(numbers))
// так надо
// arrayNumbersMoreThanTen(numbers)


//стоило подумать и получилось, я не уверен что правильно задал названия const, если можно сделать лучше или проще или удобнее, то мне интересно как ======================================================

// function miniCalculator(firstNumber, secondNumber, sign) {
//     if (sign === minus) {
//         return firstNumber - secondNumber
//     } else if (sign === plus) {
//         return firstNumber + secondNumber
//     } else if (sign === division) {
//         return firstNumber / secondNumber
//     } else if (sign === multiplication) {
//         return firstNumber * secondNumber
//     } else {
//         return 'я такое не умею'
//     }
// }

// const result = miniCalculator(5, 3, 'asdasd')
// console.log(result)

// через свитч кейс
// function miniCalculator(firstNumber, secondNumber, sign) {
//     switch (sign) {
//         case 'minus':
//             return firstNumber - secondNumber
//         case 'plus':
//             return firstNumber + secondNumber
//         case 'division':
//             return firstNumber / secondNumber
//         case 'multiplication':
//             return firstNumber * secondNumber
//         default:
//             return 'я такое не умею'
//     }
// }

// const result = miniCalculator(5, 3, 'division')
// console.log(result)