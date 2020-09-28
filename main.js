const Result = require('./UserRegistration')
var readline = require('readline');
console.log("Welcome to user validation Program")
console.log("You have following Choices:")
console.log("1.First Name 2.Last Name 3. Email Id 4.Phone Number 5.Password");
var input = readline.createInterface(process.stdin, process.stdout);
input.question("Enter your choice:",  (Choice)=> {

    switch (Choice) {
        case "1":
            input.question("Enter First Name: ", (namePattern)=> {
                Result.validateName(namePattern);
                process.exit();
            })
            break;
        case "2":
            input.question("Enter Last Name: ",  (namePattern)=> {
                Result.validateName(namePattern);
                process.exit();
            })
            break;
        case "3":
            input.question("Enter Email Id: ",  (emailPattern)=> {
                Result.validateEmail(emailPattern);
                process.exit();
            })
            break;
        case "4":
            input.question("Enter Phone Number: ",  (phoneNoPattern)=> {
                Result.validatePhoneNo(phoneNoPattern);
                process.exit();
            })
            break;
        case "5":
            input.question("Enter Password: ", (passwordPattern)=> {
                Result.validatePassword(passwordPattern);
                process.exit();
            })
            break;
    }
})