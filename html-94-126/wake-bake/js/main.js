// const burgerWinodw = document.querySelector('.burger-icon')
// const openBurgerMenu = document.body
// const closeWitchLinksBurger = document.querySelectorAll('.nav__link')
// let burgerIsopen = false

// burgerWinodw.addEventListener('click', () => {
//     if (burgerIsopen !== true) {
//         openBurgerMenu.classList.add('body--opened-menu')
//         burgerIsopen = true
//     } else {
//         openBurgerMenu.classList.remove('body--opened-menu')
//         burgerIsopen = false
//     }
// })

// closeWitchLinksBurger.forEach((nav__link) => {
//     nav__link.addEventListener('click', () => {
//         if (burgerIsopen) {
//             openBurgerMenu.classList.remove('body--opened-menu')
//             burgerIsopen = false
//         }
//     })
// })



// мой способ сверху

// function toggleBurgerMenu() {
//     const burgerWindow = document.querySelector('.burger-icon');
//     const openBurgerMenu = document.body;
//     const closeWithLinksBurger = document.querySelectorAll('.nav__link');
//     let burgerIsOpen = false;
//     burgerWindow.addEventListener('click', () => {
//         if (!burgerIsOpen) {
//             openBurgerMenu.classList.add('body--opened-menu');
//             burgerIsOpen = true;
//         } else {
//             openBurgerMenu.classList.remove('body--opened-menu');
//             burgerIsOpen = false;
//         }
//     });

//     closeWithLinksBurger.forEach((navLink) => {
//         navLink.addEventListener('click', () => {
//             if (burgerIsOpen) {
//                 openBurgerMenu.classList.remove('body--opened-menu');
//                 burgerIsOpen = false;
//             }
//         });
//     });
// }

// toggleBurgerMenu();

// тут при помощи чата gpt обернул свой код в функцию

(function () {
    const burgerWinodw = document.querySelector('.burger-icon');
    const openBurgerMenu = document.body;
    const closeWitchLinksBurger = document.querySelectorAll('.nav__link');
    let burgerIsopen = false;
    burgerWinodw.addEventListener('click', () => {
        if (!burgerIsopen) {
            openBurgerMenu.classList.add('body--opened-menu');
            burgerIsopen = true;
        } else {
            openBurgerMenu.classList.remove('body--opened-menu');
            burgerIsopen = false;
        }
    });

    closeWitchLinksBurger.forEach((nav__link) => {
        nav__link.addEventListener('click', () => {
            if (burgerIsopen) {
                openBurgerMenu.classList.remove('body--opened-menu');
                burgerIsopen = false;
            }
        });
    });
})();

// тут при помощи чата gpt обернул свой код в самовызывающую функцию
// вроде как все три мои способа выполняют условия, которые были заданы, как писал код преподователь я не смотрел, появились дела, тайминг где остановился - (102 урок, 08:20), и посмотрев дальше увидел что преподователь начал писать код в самовызывающей функции, и обернул через gpt
// вопрос, мой способ подходит?
