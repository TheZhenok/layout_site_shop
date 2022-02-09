let registerButton = document.querySelector('.header__nav__signUp')
registerButton.addEventListener('click', (e) => {
    document.querySelector('.register').classList.add('active')
    e.preventDefault()
})

let registerCloseArea = document.querySelector('.register__close__area')
registerCloseArea.addEventListener('click', (e) => {
    document.querySelector('.register').classList.remove('active')
    e.preventDefault()
})


let loginButton = document.querySelector('.header__nav__signIn')
loginButton.addEventListener('click', (e) => {
    document.querySelector('#log').classList.add('active')
    e.preventDefault()
})

let loginCloseArea = document.querySelector('#close__login')
loginCloseArea.addEventListener('click', (e) => {
    document.querySelector('#log').classList.remove('active')
    e.preventDefault()
})

let inputs = document.querySelectorAll('input')
if(inputs.length != 0){
    for (let index = 0; index < inputs.length; index++) {
        const input = inputs[index];
        input.addEventListener('keydown', () => {
            input.classList.add('click')
            setTimeout(() => {
                input.classList.remove('click')
            }, 100);
        })
        
    }
}
