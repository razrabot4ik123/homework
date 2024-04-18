// const modalClose = document.querySelector('.modal__close-btn')
// const modalWindow = document.querySelector('.modal')
// const modalOpen = document.querySelector('.btn-open')



// modalOpen.addEventListener('click', () => {
//     if (modalWindow.style.display = 'none') {
//         modalWindow.style.display = 'flex'
//     }
// })


// modalClose.addEventListener('click', () => {
//     modalWindow.style.display = 'none'
// })



// то что сверху сделал сам, сначало пытался сделать с добавлением класса, а потом увидел что в видео начали использовать дисплей, и тогда сразу ясно стало что делать, вроде все работает
// но в одном уроке говорилось, что не очень правильно юзать style, поэтому сделал так, также в css добавил пометку для второго способа



// const modalClose = document.querySelector('.modal__close-btn')
// const modalWindow = document.querySelector('.modal')
// const modalOpen = document.querySelector('.btn-open')

// modalOpen.addEventListener('click', () => {
//     modalWindow.classList.add('modal--open')
// })

// modalClose.addEventListener('click', () => {
//     modalWindow.classList.remove('modal--open')
// })



// ниже пишу способ из урока

const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body

const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}


btn.addEventListener('click', openModal)

modal.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        modal.classList.toggle('modal--open')   
    }
})

// ну да у меня халтурненько по сравнению с этим титаном