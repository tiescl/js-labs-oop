class User {
    constructor(username, password) {
        this._username = username;
        this._password = password;
    }

    validateLogin(inputPassword) {
        return inputPassword == this._password;
    }
}
