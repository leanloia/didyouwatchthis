'use strict'

class Signup {
    constructor() {
        this.nameInput = document.querySelector('#name');
        this.usernameInput = document.querySelector('#username');
        this.emailInput = document.querySelector('#email');
        this.passwordInput = document.querySelector('#password');
        this.repeatPasswordInput = document.querySelector('#repeatPassword');

        this.buttonInput = document.querySelector('#signup-button');
        this.errorsWrapper = document.querySelector('.container-message');

    }

    // gestionar cambios del input name
    handleNameInput = (event) => {
        const name = event.target.value;

        console.log('name', name);

        //validar texto del input name
    }
    handleUsernameInput = (event) => {
        const username = event.target.value;

        console.log('username', username);

        //validar texto del input username
    }
    // gestionar cambios del input username
    handleEmailInput = (event) => {
        const email = event.target.value;

        console.log(`email`, email);

        //validar texto del input email
    }
    // gestionar cambios del input PASSWORD
    handlePasswordInput = (event) => {
        const password = event.target.value;

        console.log(`password`, password);

        //validar texto del input password
    }
    // gestionar cambios del input REPEAT PASSWORD
    handleRepeatPasswordInput = (event) => {
        const repeatPassword = event.target.value;

        console.log(`repeatPassword`, repeatPassword);

        //validar texto del input repeatPassword
    }
    // gestionar el envío de datos (submit button)

    saveData = (event) => {
        //recoge value de cada input
        const name = this.nameInput.value
        const username = this.usernameInput.value
        const email = this.emailInput.value
        const password = this.passwordInput.value
        const repeatPassword = this.repeatPasswordInput.value

        // paso funcionalidad createUser como clase a user.js a otro archivo (para codigo mas modular)


        const newUser = new User(name, username, email, password);

        /* 
         * Pseudocódigo
         *
         *   // queremos guardar el nuevo usuario en la base de datos (simulada)
         *       database.createNewUser (newUser);
         * 
         */

        //vaciar form
        this.nameInput.value = "";
        this.usernameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";

    }

    // registrar funciones para cada input
    addListeners = () => {
        this.nameInput.addEventListener('input', this.handleNameInput);
        this.usernameInput.addEventListener('input', this.handleUsernameInput);
        this.emailInput.addEventListener('input', this.handleEmailInput);
        this.passwordInput.addEventListener('input', this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);

        this.buttonInput.addEventListener('click', this.saveData)
    }
}

const signup = new Signup();

window.addEventListener('load', signup.addListeners)