class UserRegistration {
    /**
         * Function to print the output
         */
    print(validPattern, inputPattern) {
        if (validPattern.test(inputPattern)) {
            console.log("It's a valid input");
        } else {
            console.log("It's a invalid input")
        }
    }
    /**
         * Function to validate first name and last name
         */
    validateName = (Name) => {
        let namePattern = new RegExp("^[A-Z]{1}([a-z]{2,15})$")
        this.print(namePattern, Name)
    }
    /**
         * Function to validate emailId
         */
    validateEmail = (EmailId) => {
        let emailPattern = new RegExp("^[0-9a-zA-Z]+([+_.-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{2,3}){1,2}$")
        this.print(emailPattern, EmailId)
    }
    /**
         * Function to validate phone number
         */
    validatePhoneNo = (PhoneNo) => {
        let phoneNoPattern = new RegExp("^[0-9]{2}[ ][0-9]{10}$")
        this.print(phoneNoPattern, PhoneNo)
    }
    /**
         * Function to validate password
         */
    validatePassword = (PassWord) => {
        let passwordPattern = new RegExp("(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%+!]{1}).{8,}")
        this.print(passwordPattern, PassWord)
    }
}
module.exports = new UserRegistration()