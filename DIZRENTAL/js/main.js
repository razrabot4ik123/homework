(function () {

    // отсюда переключатель локации===============================

    const changeGeolocation = document.querySelector('.haeder__change-geolocation');

    changeGeolocation.addEventListener('click', (e) => {

        const userGeoActive = e.target.closest('.header__geolocation--active')

        const firstGeo = changeGeolocation.firstElementChild
        const lastGeo = changeGeolocation.lastElementChild

        if (userGeoActive) return

        if (firstGeo.classList.contains('header__geolocation--active')) {
            firstGeo.classList.remove('header__geolocation--active')
            lastGeo.classList.add('header__geolocation--active')

            changeGeolocation.classList.remove('geolocation--Moscow')
            changeGeolocation.classList.add('geolocation--Dubai')

        } else if (lastGeo.classList.contains('header__geolocation--active')) {
            lastGeo.classList.remove('header__geolocation--active')
            firstGeo.classList.add('header__geolocation--active')

            changeGeolocation.classList.remove('geolocation--Dubai')
            changeGeolocation.classList.add('geolocation--Moscow')
        }

    });

    // отсюда дропдавн=========================

    const dropdown = document.querySelector('.header__nav-dropdown')
    const openDropdown = document.querySelector('.header__nav')
    const closeDropdownLinks = document.querySelector('.header__nav-list')

    dropdown.addEventListener('click', () => {

        if (document.documentElement.clientWidth > 1500) return

        if (openDropdown.classList.contains('header__nav-dropdown--open')) {
            openDropdown.classList.remove('header__nav-dropdown--open')
        } else {
            openDropdown.classList.add('header__nav-dropdown--open')
        }

    })

    closeDropdownLinks.addEventListener('click', (e) => {
        if (e.target && e.target.tagName === 'A') {
            openDropdown.classList.remove('header__nav-dropdown--open')
        }
    })

    document.addEventListener('click', e => {
        if (!dropdown.contains(e.target)) {
            openDropdown.classList.remove('header__nav-dropdown--open');
        }
    })

    // отсюда бургер=======================================

    const burgerWinodw = document.querySelector('.burger-icon')
    const openBurgerMenu = document.body
    const closeWitchLinksBurger = document.querySelector('.header__nav-list ')
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

    // отсюда модалка============================================

    const modal = document.querySelector('.modal')
    const body = document.body

    const openModal = () => {
        body.classList.add('body--opened-modal')
        modal.classList.add('modal--opened')
    }
    const closeModal = () => {
        body.classList.remove('body--opened-modal')
        modal.classList.remove('modal--opened')
    }

    body.addEventListener('click', (e) => {

        if (e.target.closest('.button__open-modal')) {
            e.preventDefault()
            openModal()
        }
    })

    modal.addEventListener('click', (e) => {

        if (e.target && e.target.classList.contains('modal') || e.target.closest('.modal__cancel')) {
            e.preventDefault()
            closeModal()
        }
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('modal--opened')) {
            modal.classList.toggle('modal--opened')
            body.classList.toggle('body--opened-modal')
        }

    })

    // отсюда смена title ===========================================

    const frames = ['BEST | CARS', 'DIZRENTAL']

    setInterval(() => {
        const frame = frames.shift()

        document.title = frame

        frames.push(frame)

    }, 5000)

    // отсюда маска для телефона =========================

    const telInputs = document.querySelectorAll('input[type="tel"]');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);

    // отсюда =======================

})()