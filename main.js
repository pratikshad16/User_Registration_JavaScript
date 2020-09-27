const Result = require('./UserRegistration')
var readline = require('readline');
console.log("Welcome to user validation Program")
console.log("You have following Choices:")
console.log("1.First Name 2.Last Name 3. Email Id 4.Phone Number 5.Password");
var input = readline.createInterface(process.stdin, process.stdout);
input.question("Enter your choice:", function (Choice) {

    switch (Choice) {
        case "1":
            input.question("Enter First Name: ", function (namePattern) {
                Result.validateName(namePattern);
                process.exit();
            })
            break;
        case "2":
            input.question("Enter Last Name: ", function (namePattern) {
                Result.validateName(namePattern);
                process.exit();
            })
            break;
            case "3":
                console.log("Validate email Id should be like following samples: "+
                "abc@yahoo.com, abc-100@yahoo.com, abc.100@yahoo.com, abc111@abc.com, abc-100@abc.net, abc.100@abc.com.au, abc@1.com, abc@gmail.com.com")
            input.question("Enter Email Id: ", function (emailPattern) {
                Result.validateEmail(emailPattern);
                process.exit();
            })
            break;
            case "4":
            input.question("Enter Phone Number: ", function (phoneNoPattern) {
                Result.validatePhoneNo(phoneNoPattern);
                process.exit();
            })
            break;
            case "5":
            input.question("Enter Password: ", function (passwordPattern) {
                Result.validatePassword(passwordPattern);
                process.exit();
            })
            break;
    }
})