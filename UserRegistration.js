const prompt = require('prompt-sync')();

// RegEx Formats
let namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
let emailPattern = new RegExp("^[a-zA-Z0-9.+_-]+[@][a-zA-Z0-9]+[.]co(m|.in)$");

// Variables
let firstName = "";
let lastName = "";
let email = "";

function checkFormat(input, inputFormat){
    return inputFormat.test(input);
}

function getFirstName(){
    firstName = prompt("Enter First Name: ");
    if(!checkFormat(firstName, namePattern)){
        console.log("Enter Valid First Name");
        getFirstName();
    }
    return;
}

function getLastName(){
    lastName = prompt("Enter Last Name: ");
    if(!checkFormat(lastName, namePattern)){
        console.log("Enter Valid Last Name");
        getLastName();
    }
    return
}

function getEmail(){
    email = prompt("Enter Email: ");
    if(!checkFormat(email, emailPattern)){
        console.log("Enter Valid Email");
        getEmail();
    }
}

getFirstName();
getLastName();
getEmail();
