class UserRegistration {
    validateName = (Name) => {
        let namePattern = /^[A-Z]{1}([a-z]{2,15})$/.test(Name)
        console.log(namePattern);
    }
    validateEmail = (EmailId) => {
        let emailPattern = /^[0-9a-zA-Z]+([+_.-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{2,3}){1,2}$/.test(EmailId)
        console.log(emailPattern);
    }
}
module.exports = new UserRegistration()