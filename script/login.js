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
            message.innerHTML = `Welcome back, ${user.username}`;
            message.classList.add('btn');
            message.classList.add('btn-success');
            message.classList.add('btn-rounded');
        } else {
            message.innerHTML = 'Email o password son incorrectos';
            message.classList.add('failure-message')
            message.classList.add("btn");
            message.classList.add("btn-outline-danger");
            message.classList.add("btn-rounded");
            message.classList.add("waves-effect");;

        }

        this.messageContainer.appendChild(message);

        if (user) {
            this.redirect()
        }
    }

    redirect = () => {
        setTimeout( () =>location.assign("../index.html"), 3500)        
    }


}

const login = new Login();

login.loginButton.addEventListener('click', login.submit);