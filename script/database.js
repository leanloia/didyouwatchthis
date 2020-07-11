'use strict'

class Database {

    // metodo para recuperar los usuarios

    getAllUsers = () => {
        // recupera string
        const usersStr = localStorage.getItem("users");
        //pasa string a array
        const usersArr = JSON.parse(usersStr);


        if (usersArr === null) {
            return [];
        } else {
            return usersArr;
        }

    }

    saveNewUser = (newUser) => {
        //recuperar el array de los usuarios del localStorage
        const usersArr = this.getAllUsers()

        // actualizar el array
        usersArr.push(newUser)

        //convertir array a string
        const usersStr = JSON.stringify(usersArr);
        // almacena de nuevo en localStorage
        localStorage.setItem("users", usersStr)

    }
}


const db = new Database();