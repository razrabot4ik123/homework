// примитивные
// 1) string | тип строк | '' "" ``

// const instrument = 'Интрумент'
// const box = 'ящик'
// console.log(`${instrument} лежит в ${box}е`)
// console.log(typeof(instrument))


// 2) number | тип чисел |

// let instrument = 'Интрумент'
// const box = 'ящик'
// instrument = 10
// console.log(instrument)
// есть максимальное значение: (2^53)-1
// есть минимальное значение: -((25^3)-1)
// существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и (NaN - NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции) NaN ** 0 равно 1


// 3) boolean | логический тип | true false

// let instrument = 'Интрумент'
// const box = 'ящик'
// const user = 'User'
// const age = 25
// const isAdmin = true
// console.log(typeof(isAdmin))
// console.log(`${user} admin: ${isAdmin}`)


// 4) undefined

// let foo
// console.log(foo)
// Оно означает, что «значение не было присвоено».


// 5) null

// let sum = null
// Оно формирует отдельный тип, который содержит только значение null
// Обычно null используется для присвоения переменной «пустого» или «неизвестного» значения, а undefined – для проверок, была ли переменная назначена.


// 6) bigint*

// позволяет использовать огромные числа
// Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала


// 7) symbol*

// знать что такое есть
// Тип symbol (символ) используется для создания уникальных идентификаторов в объектах


// Оператор typeof
// Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.
typeof 50 + " Квартир"; // Выведет "number Квартир"
typeof (50 + " Квартир"); // Выведет "string"







typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

// Math — это встроенный объект, который предоставляет математические операции и константы.
// Мы рассмотрим его подробнее в главе Числа. Здесь он служит лишь примером объекта.

// Результатом вызова typeof null является "object". Это официально признанная ошибка в typeof,
// ведущая начало с времён создания JavaScript и сохранённая для совместимости. Конечно,
// null не является объектом. Это специальное значение с отдельным типом.

// Вызов typeof alert возвращает "function", потому что alert является функцией. Мы изучим 
// функции в следующих главах, где заодно увидим, что в JavaScript нет специального типа «функция». 
// Функции относятся к объектному типу. Но typeof обрабатывает их особым образом, возвращая "function". 
// Так тоже повелось от создания JavaScript. Формально это неверно, но может быть удобным на практике.