// const btns = document.querySelectorAll('.btn')

// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         console.log(btn.textContent)
//     })
// })


// делегирование событий
// const btnsWrapper = document.querySelector('.btns')

//только с тегом button 
// btnsWrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName === 'BUTTON') {
//         console.log(event.target.textContent)
//     }
// })


//все с классом btn
// btnsWrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('btn')) {
//         console.log(event.target.textContent)
//     }
// })

// сокращенно все с классом btn
// btnsWrapper.addEventListener('click', (event) => {
//     const target = event.target
//     if (target && target.classList.contains('btn')) {
//         console.log(target.textContent)
//     }
// })



//========================++++++++++++++++++++++++++++++++++++++++++++ 
// const btns = document.querySelectorAll('.btn')

// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         console.log(btn.textContent)
//     })
// })


// const btnsWrapper = document.querySelector('.btns')

// btnsWrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName === 'BUTTON') {
//         console.log(event.target.textContent)
//     } 
// })