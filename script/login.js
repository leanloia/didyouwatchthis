'use strict'

class Login {
    constructor() {
        this.emailInput = document.querySelector('#email-login')
        this.passwordInput = document.querySelector('#password-login')

        this.loginButton = document.querySelector('#signin-button')
        this.messageContainer = document.querySelector('.container-message')
    }

    //método submit que gestionará envío de los datos (durante event)
    submit = (event) => {
        event.preventDefault();

        const usersDB = db.getAllUsers();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        // intentar encontrar el usuario
        // usamos find porque SOLO devuelve la expresion

        const user = usersDB.find((userObj) => {
            if (userObj.email === email && userObj.password === password) {
                return true
            }
        })

        this.showMessage(user);

    }


    //showMessage para mostrar un mensaje (error o éxito)
    showMessage = (user) => {
        this.messageContainer.innerHTML = ''
        const message = document.createElement('p')

        if (user) {
            //si el usuario existe
            message.innerHTML = `Hola, ${user.email}`;
            message.classList.add('correct-message');
        } else {
            message.innerHTML = 'Email y/o password son incorrectos';

        }

        this.messageContainer.appendChild(message);

        if (user) {
            this.redirect()
        }
    }

    redirect = () => {
        setTimeout( () =>location.assign("../index.html"), 2000)        
    }


}

const login = new Login();

login.loginButton.addEventListener('click', login.submit);