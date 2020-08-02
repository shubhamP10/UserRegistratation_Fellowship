const prompt = require('prompt-sync')();

// RegEx Formats
const namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
const emailPattern = new RegExp("^[a-zA-Z0-9.+_-]+[@][a-zA-Z0-9]+[.]co(m|.in)$");
const phonePattern = new RegExp("^[0-9]{1,3} [6-9][0-9]{9}$");
const passwordPattern = new RegExp("(?=.*[0-9])(?=.*[A-Z]).{8,}");

// Variables
let firstName = "";
let lastName = "";
let email = "";
let phone = "";
let password = "";

function validateInput(input, inputFormat){
    return inputFormat.test(input);
}

function readFirstName(){
    firstName = prompt("Enter First Name: ");
    if(!validateInput(firstName, namePattern)){
        console.log("Enter Valid First Name");
        readFirstName();
    }
    return;
}

function readLastName(){
    lastName = prompt("Enter Last Name: ");
    if(!validateInput(lastName, namePattern)){
        console.log("Enter Valid Last Name");
        readLastName();
    }
    return
}

function readEmail(){
    email = prompt("Enter Email: ");
    if(!validateInput(email, emailPattern)){
        console.log("Enter Valid Email");
        readEmail();
    }
}

function readPhoneNumber(){
    phone = prompt("Enter Phone Number: ");
    if(!validateInput(phone, phonePattern)){
        console.log("Enter Valid Phone Number");
        readPhoneNumber();
    }
}

function readPassword(){
    password = prompt("Enter Password: ");
    if(!validateInput(password, passwordPattern)){
        console.log("Enter Valid Password");
        readPassword();
    }
}

readFirstName();
readLastName();
readEmail();
readPhoneNumber();
readPassword();