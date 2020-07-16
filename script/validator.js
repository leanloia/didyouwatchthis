'use strict'

class Validator {
    constructor () {
        //mensajes predeterminados
        this.usernameExistError = 'Username ya registrado'
        this.invalidEmailError = 'Introduce un e-mail válido';
        this.emailExistsError = 'E-mail ya está registrado';
        this.passwordError = 'Introduce una contraseña de 6 o más caracteres';
        this.repeatPasswordError = 'Los campos no coinciden';

        //objeto con los errores a mostrar al usuario
        this.errors = {
            usernameExistError: this.usernameExistError,
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }

    }


    //validar el username
    validateUniqueUsername = (newUsername) => {
        const usersDB = db.getAllUsers();
        let userNameUnique = true;

        if (usersDB.length > 0) {
            usersDB.forEach(userObj => {
                if (userObj.username === newUsername) {
                    userNameUnique = false;
                }
            });

            if (userNameUnique) {
                delete this.errors.usernameExistError;
            } else {
                this.errors.usernameExistError = this.usernameExistError
            }
        }

    }

    //validar email
    validateValidEmail = (email) => {

        //si el email es valido, quito error de this.errors
        if (this.emailIsValid(email)) {
            delete this.errors.invalidEmailError
        } else {
            //si no es valido, poner el error
            this.errors.invalidEmailError = this.invalidEmailError
        }
    }

    //function auxiliar de 'validateValidEmail'
    emailIsValid = (email) => {
        //regEx contiene condiciones sintácticas que tiene que cumplir
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        //metodo test (viene con regEx) prueba si cumple las reglas
        //y devuelve true or false
        const isValid = emailRegEx.test(email)

        return isValid;
    }

    //validar que el email no existe
    validateUniqueEmail = (newEmail) => {
        const usersDB = db.getAllUsers();
        let emailUnique = true;

        if (usersDB.length > 0) {
            usersDB.forEach(userObj => {
                // si el mail ya está tomado, cambia el valor de la varible a false
                if (userObj.email === newEmail) {
                    emailUnique = false;
                }
            });


            if (emailUnique) {
                delete this.errors.emailExistsError;
            } else {
                this.errors.emailExistsError = this.emailExistsError
            }


        }

    }


    //validar el password (longitud)
    validatePassword = (password) => {
        if (password.length > 5) {
            delete this.errors.passwordError
        } else {
            this.errors.passwordError = this.passwordError
        }
    }

    //validar que el password es igual al repeatPassword
    validatePasswordRepeat = (password, repeatPassword) => {
        if (password === repeatPassword) {
            delete this.errors.repeatPasswordError
        } else {
            this.errors.repeatPasswordError = this.repeatPasswordError
        }
    }

    //método para obtener objeto con errores, para mostrarlo en la pagina register
    getErrors = () => this.errors;

    //reiniciar los errores mostrados
    resetValidator = () => {
        this.errors = {
            usernameExistError: this.usernameExistError,
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }


}

const validator = new Validator();