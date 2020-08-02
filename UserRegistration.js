const prompt = require('prompt-sync')();

// RegEx Formats
let nameFormat = new RegExp("^[A-Z]{1}[A-Za-z]{2}");

// Variables
let firstName = "";
let lastName = "";

function checkFormat(input, inputFormat){
    return inputFormat.test(input);
}

function getFirstName(){
    firstName = prompt("Enter First Name: ");
    if(!checkFormat(firstName, nameFormat)){
        console.log("Enter Valid First Name");
        getFirstName();
    }
    return;
}

function getLastName(){
    lastName = prompt("Enter Last Name: ");
    if(!checkFormat(lastName, nameFormat)){
        console.log("Enter Valid Last Name");
        getLastName();
    }
    return
}
getFirstName();
getLastName();
