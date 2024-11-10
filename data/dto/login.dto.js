class LoginDTO {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    static fromRequestBody(body) {
        return new LoginDTO(body.email, body.password);
    }
}

module.exports = LoginDTO;