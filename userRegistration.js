class UserRegistration {
    validateFirstName = (Name) => {
        let firstName = /^[A-Z]{1}([a-z]{2,15})$/.test(Name)
        console.log(firstName);
    }
}
module.exports = new UserRegistration()