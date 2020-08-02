const prompt = require('prompt-sync')();

// RegEx Formats
let namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
let emailPattern = new RegExp("^[a-zA-Z0-9.+_-]+[@][a-zA-Z0-9]+[.]co(m|.in)$");
let phonePattern = new RegExp("^[0-9]{1,3} [6-9][0-9]{9}$");

// Variables
let firstName = "";
let lastName = "";
let email = "";
let phone = "";

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

// readFirstName();
// readLastName();
// readEmail();
readPhoneNumber();