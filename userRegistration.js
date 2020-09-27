class UserRegistration {
    validateName = (Name) => {
        let namePattern = /^[A-Z]{1}([a-z]{2,15})$/.test(Name)
        console.log(namePattern);
    }
    validateEmail = (EmailId) => {
        let emailPattern = /^[0-9a-zA-Z]+([+_.-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{2,3}){1,2}$/.test(EmailId)
        console.log(emailPattern);
    }
    validatePhoneNo = (PhoneNo) => {
        let phoneNoPattern = /^[0-9]{2}[ ][0-9]{10}$/.test(PhoneNo)
        console.log(phoneNoPattern);
    }
    validatePassword = (PassWord) => {
        let passwordPattern = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%+!]{1}).{8,}/.test(PassWord)
        console.log(passwordPattern);
    }
}
module.exports = new UserRegistration()