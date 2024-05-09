// const burgerWinodw = document.querySelector('.burger-icon')
// const openBurgerMenu = document.body
// let burgerIsopen = false
// const closeWitchLinksBurger = document.querySelector('.nav__list')

// burgerWinodw.addEventListener('click', () => {
//     if(document.documentElement.clientWidth > 900) return
//     if (burgerIsopen !== true) {
//         openBurgerMenu.classList.add('body--opened-menu')
//         burgerIsopen = true
//     } else {
//         openBurgerMenu.classList.remove('body--opened-menu')
//         burgerIsopen = false
//     }
// })
// closeWitchLinksBurger.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName === 'A') {
//         openBurgerMenu.classList.remove('body--opened-menu')
//         burgerIsopen = false
//     }
// })
// с делигированием событий================================================================


// const closeWitchLinksBurger = document.querySelectorAll('.nav__link')
// closeWitchLinksBurger.forEach((nav__link) => {
//     nav__link.addEventListener('click', () => {
//         if (burgerIsopen) {
//             openBurgerMenu.classList.remove('body--opened-menu')
//             burgerIsopen = false
//         }
//     })
// })
// без делигирования событий================================================================

// мой способ сверху=======================================================

// (function () {
//     const burgerWinodw = document.querySelector('.burger-icon')
//     const openBurgerMenu = document.body
//     const closeWitchLinksBurger = document.querySelector('.nav__list')
//     let burgerIsopen = false

//     burgerWinodw.addEventListener('click', () => {
//         if (document.documentElement.clientWidth > 900) return
//         if (burgerIsopen !== true) {
//             openBurgerMenu.classList.add('body--opened-menu')
//             burgerIsopen = true
//         } else {
//             openBurgerMenu.classList.remove('body--opened-menu')
//             burgerIsopen = false
//         }
//     })
//     closeWitchLinksBurger.addEventListener('click', (event) => {
//         if (event.target && event.target.tagName === 'A') {
//             openBurgerMenu.classList.remove('body--opened-menu')
//             burgerIsopen = false
//         }
//     })
// })()

// тут в самовыывающейся функцие==========================================================================

// (function () {
//     document.addEventListener('click', burgerInit)
//     function burgerInit(e) {
//         const burgerIcon = e.target.closest('.burger-icon')
//         const burgerNavLink = e.target.closest('.nav__link')

//         if (!burgerIcon && !burgerNavLink) return

//         if (document.documentElement.clientWidth > 900) return

//         // отменить переход по ссылке для бургер меню
//         // if (burgerIcon) {
//         //     e.preventDefault()
//         // }

//         if (!document.body.classList.contains('body--opened-menu')) {
//             document.body.classList.add('body--opened-menu')
//         } else {
//             document.body.classList.remove('body--opened-menu')
//         }
//     }
// })()

// способ преподавателя======================================================================

// ниже модалка мой способ=============================================================

(function () {

    //отсюда бургер гррра=================================================================== 

    const burgerWinodw = document.querySelector('.burger-icon')
    const openBurgerMenu = document.body
    const closeWitchLinksBurger = document.querySelector('.nav__list')
    let burgerIsopen = false

    burgerWinodw.addEventListener('click', () => {
        if (document.documentElement.clientWidth > 900) return
        if (burgerIsopen !== true) {
            openBurgerMenu.classList.add('body--opened-menu')
            burgerIsopen = true
        } else {
            openBurgerMenu.classList.remove('body--opened-menu')
            burgerIsopen = false
        }
    })
    closeWitchLinksBurger.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A') {
            openBurgerMenu.classList.remove('body--opened-menu')
            burgerIsopen = false
        }
    })

    // отсюда модалка=================================================================

    const button = document.querySelector('.about__img-button')
    const modal = document.querySelector('.modal')
    const body = document.body

    const openModal = (event) => {
        event.preventDefault()
        body.classList.add('body--opened-modal')
        modal.classList.add('modal--opened')
    }
    const closeModal = () => {
        body.classList.remove('body--opened-modal')
        modal.classList.remove('modal--opened')
    }

    button.addEventListener('click', openModal)

    modal.addEventListener('click', (event) => {
        event.preventDefault()
        const target = event.target
        if (target && target.classList.contains('modal') || target.closest('.modal__cancel')) {
            closeModal()
        }
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('modal--opened')) {
            modal.classList.toggle('modal--opened')
            body.classList.toggle('body--opened-modal')
        }

        // ниже закрытие бургер меню через эскейп хоть и не надо, но я сделал чтобы было(вдруг кто-то к телефону клаву подключит)=====================================

        if (event.code === 'Escape' && openBurgerMenu.classList.contains('body--opened-menu')) {
            openBurgerMenu.classList.remove('body--opened-menu')
            burgerIsopen = false
        }
    })

    // отсюда табы=====================================================================

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(event) {

        const tabControl = event.target.closest('.tab-controls__link')

        if (!tabControl) return
        event.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active') || tabControl.classList.contains('tab-content--show')) return


        // посмотреть путь
        // console.log(tabControl.href)
        // посмотреть селектор атрибута хрефа
        // console.log(tabControl.getAttribute('href'))


        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')

        tabContent.classList.add('tab-content--show')

    }

    //остюда аккордеоны================================================================

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(element => {

        element.addEventListener('click', (event) => {
            const accordionControl = event.target.closest('.accordion-list__control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            const accordionList = accordionItem.parentElement
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }

            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })

})()

// ниже табы без новых переменных=============================================================================================

// const tabControls = document.querySelector('.tab-controls')

// tabControls.addEventListener('click', toggleTab)

// function toggleTab(event) {
//     const tabControl = event.target.closest('.tab-controls__link')

//     if (!tabControl) return

//     event.preventDefault()

//     if (tabControl.classList.contains('tab-controls__link--active') || tabControl.classList.contains('tab-content--show')) return


//     // посмотреть путь
//     // console.log(tabControl.href)
//     // посмотреть селектор атрибута хрефа
//     // console.log(tabControl.getAttribute('href'))

//     const tabContentID = tabControl.getAttribute('href')

//     document.querySelector('.tab-content--show').classList.remove('tab-content--show')
//     document.querySelector(tabContentID).classList.add('tab-content--show')

//     document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
//     tabControl.classList.add('tab-controls__link--active')
// }

// ниже писал вне функции ===================================================================================

// const button = document.querySelector('.about__img-button')
// const modal = document.querySelector('.modal')
// const body = document.body

// const openModal = () => {
//     body.classList.add('body--opened-modal')
//     modal.classList.add('modal--opened')
// }
// const closeModal = () => {
//     body.classList.remove('body--opened-modal')
//     modal.classList.remove('modal--opened')
// }

// button.addEventListener('click', openModal)

// modal.addEventListener('click', (event) => {
//     const target = event.target

//     if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
//         closeModal()
//     }
// })

// document.addEventListener('keydown', event => {
//     if (event.code === 'Escape' && modal.classList.contains('modal--opened')) {
//         modal.classList.toggle('modal--opened')
//         body.classList.toggle('body--opened-modal')
//     }
// })

// ниже модалка способ преподавателя ======================================================

// (function () {
//     document.addEventListener('click', burgerInit)
//     function burgerInit(e) {
//         const burgerIcon = e.target.closest('.burger-icon')
//         const burgerNavLink = e.target.closest('.nav__link')

//         if (!burgerIcon && !burgerNavLink) return

//         if (document.documentElement.clientWidth > 900) return

//         // отменить переход по ссылке для бургер меню
//         // if (burgerIcon) {
//         //     e.preventDefault()
//         // }

//         if (!document.body.classList.contains('body--opened-menu')) {
//             document.body.classList.add('body--opened-menu')
//         } else {
//             document.body.classList.remove('body--opened-menu')
//         }
//     }

//     // отсюда модалка

//     const modal = document.querySelector('.modal')
//     const modalButton = document.querySelector('.about__img-button')

//     modalButton.addEventListener('click', openModal)
//     modal.addEventListener('click', closeModal)

//     function openModal(e) {
//         e.preventDefault()
//         document.body.classList.toggle('body--opened-modal')
//     }
//     function closeModal(e) {
//         e.preventDefault()

//         const target = e.target

//         if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
//             document.body.classList.remove('body--opened-modal')
//         }
//     }
// })()


// ниже преподаватель писал закрытие аккордеона при открытии другого =========================================

// const accordionLists = document.querySelectorAll('.accordion-list')

// accordionLists.forEach(element => {

//     element.addEventListener('click', (event) => {
//         const accordionList = event.currentTarget
//         const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
//         const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

//         const accordionControl = event.target.closest('.accordion-list__control')
//         if (!accordionControl) return
//         const accordionItem = accordionControl.parentElement
//         const accordionContent = accordionControl.nextElementSibling


//         if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
//             accordionOpenedItem.classList.remove('accordion-list__item--opened')
//             accordionOpenedContent.style.maxHeight = null
//         }

//         accordionItem.classList.toggle('accordion-list__item--opened')

//         if (accordionItem.classList.contains('accordion-list__item--opened')) {
//             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
//         } else {
//             accordionContent.style.maxHeight = null
//         }
//     })
// })


// ниже делал аккордеон после просмтотра реализации преподавателя ==============================

// const accordionLists = document.querySelectorAll('.accordion-list')

// accordionLists.forEach(element => {

//     element.addEventListener('click', (event) => {
//         const accordionControl = event.target.closest('.accordion-list__control')
//         if (!accordionControl) return
//         const accordionItem = accordionControl.parentElement
//         const accordionContent = accordionControl.nextElementSibling

//         const accordionList = accordionItem.parentElement
//         const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
//         const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

//         if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
//             accordionOpenedItem.classList.remove('accordion-list__item--opened')
//             accordionOpenedContent.style.maxHeight = null
//         }

//             accordionItem.classList.toggle('accordion-list__item--opened')

//         if (accordionItem.classList.contains('accordion-list__item--opened')) {
//             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
//         } else {
//             accordionContent.style.maxHeight = null
//         }
//     })
// })