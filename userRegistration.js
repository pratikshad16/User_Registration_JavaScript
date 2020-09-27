class UserRegistration {
    validateName = (Name) => {
        let namePattern = /^[A-Z]{1}([a-z]{2,15})$/.test(Name)
        console.log(namePattern);
    }
}
module.exports = new UserRegistration()