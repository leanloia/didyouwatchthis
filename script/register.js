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

    handleUsernameInput = (event) => {
        const username = event.target.value;

        validator.validateUniqueUsername(username);

        this.setErrorMessages();


        //validar texto del input username
    }
    // gestionar cambios del input username
    handleEmailInput = (event) => {
        const email = event.target.value;
        //validar texto del input email

        validator.validateValidEmail(email);

        const errors = validator.getErrors();

        //si el nombre del email es valido
        if (!errors.invalidEmailError) {
            //comprueba si el email es unico
            validator.validateUniqueEmail(email);
        }

        this.setErrorMessages();

    }
    // gestionar cambios del input PASSWORD
    handlePasswordInput = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value
        //validar texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        this.setErrorMessages();
    }
    // gestionar cambios del input REPEAT PASSWORD
    handleRepeatPasswordInput = (event) => {
        const passwordRepeat = event.target.value;
        const password = this.passwordInput.value;

        //validar texto del input repeatPassword
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat)

        this.setErrorMessages();
    }


    // gestionar el envío de datos (submit button)

    saveData = (event) => {
        event.preventDefault();
        //recoge value de cada input
        const name = this.nameInput.value
        const username = this.usernameInput.value
        const email = this.emailInput.value
        const password = this.passwordInput.value
        const repeatPassword = this.repeatPasswordInput.value

        // paso funcionalidad createUser como clase a user.js a otro archivo (para codigo mas modular)


        const newUser = new User(name, username, email, password);

        db.saveNewUser(newUser);


        //vaciar form
        this.nameInput.value = "";
        this.usernameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";

        this.showSuccessMessage();
        this.removeMessages();

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

    setErrorMessages = () => {
        this.errorsWrapper.innerHTML = "";

        const errorsObj = validator.getErrors();
        const errorsStringsArr = Object.values(errorsObj)

        errorsStringsArr.forEach(errorStr => {
            const errorMessageP = document.createElement('p');
            errorMessageP.innerHTML = errorStr;
            errorMessageP.classList.add("btn");
            errorMessageP.classList.add("btn-outline-danger");
            errorMessageP.classList.add("btn-rounded");
            errorMessageP.classList.add("waves-effect");
            this.errorsWrapper.appendChild(errorMessageP)
        });

    }

    showSuccessMessage = () => {
        this.errorsWrapper.innerHTML = "";
        const errorsObj = validator.getErrors();
        const errorsArr = Object.values(errorsObj);

        if (errorsArr.length > 1) {
            return;
        }


        const successMessageP = document.createElement('p');
        successMessageP.innerHTML = 'La cuenta ha sido creada con éxito';
        successMessageP.classList.add('btn');
        successMessageP.classList.add('btn-success');
        successMessageP.classList.add('btn-rounded');
        this.errorsWrapper.appendChild(successMessageP);
    }

    removeMessages = () => {
        setTimeout(() => {
            this.errorsWrapper.innerHTML = "";
        }, 2000)
    }


}

const signup = new Signup();

window.addEventListener('load', signup.addListeners)