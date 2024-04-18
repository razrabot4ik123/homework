// const element = document.querySelector('.block')

// element.textContent = 'text'

// console.log(element.textContent)




// const element = document.querySelector('.block')

// element.textContent = 'text'
// element.id = '123'
// element.style.color = 'red'
// element.style.fontSize = '30px'

// console.log(element)



// первый див
// const element = document.querySelector('div')
// console.log(element)



// все дивы
const elements = document.querySelectorAll('div')
// console.log(elements)
// console.log(elements[1])

elements.forEach((element) => {
    console.log(element)
    element.style.color = 'red'
})