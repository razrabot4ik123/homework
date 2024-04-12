// const user = {
//     name: 'Alex',
//     age: 23,
//     isAdmin: false
// }

// console.log(user.name)


// const users = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     },
//     jhon: {
//         age: 20,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.jhon.isAdmin)
// users.jhon.sayHello('Tom')


// const users = [
//     {
//         name: 'alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'john',
//         age: 30,
//         isAdmin: true
//     }
// ]

// users.push({
//     name: 'ivan',
//     age: 30,
//     isAdmin: true
// })

// for (let i = 0; i < users.length; i++) {
//     // console.log(users[i].name)
//     // console.log(users[i].age)
//     console.log(users[i])
// }

// const foo = 'hello world'
// console.log(foo.toLocaleUpperCase())


// домашнее задание

// const myInfo = {
//     name: 'Matvey',
//     age: 18,
//     isRazrabot4ik: true,
//     isGay: false,
//     sayHello(name) {
//         console.log(`Hello ${name}`)
//     }
// }

// console.log(myInfo.sayHello('Artem'))


// Если можно сделать по другому или проще, то мне интересно как ==================================================================================================================
// const users = [
//     {
//         name: 'Anton',
//         age: 97,
//         isAdmin: false
//     },
//     {
//         name: 'Matvey',
//         age: 18,
//         isAdmin: true
//     },
//     {
//         name: 'Artem',
//         age: 17,
//         isAdmin: false
//     },
//     {
//         name: 'Nikita',
//         age: 16,
//         isAdmin: false
//     },
//     {
//         name: 'Nikita',
//         age: 16,
//         isAdmin: false
//     }
// ]

// let defoultUsers = 0

// for (let i = 0; i < users.length; i++) {
//     if (users[i].isAdmin === false) {
//         defoultUsers = defoultUsers + 1
//     }
// }
// console.log(defoultUsers)