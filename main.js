const Result = require('./UserRegistration')
var readline = require('readline');
console.log("Welcome to user validation Program")
console.log("You have following Choices:")
console.log("1.First Name 2.Last Name ");
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
    }
})