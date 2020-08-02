const prompt = require('prompt-sync')();

// RegEx Formats
let nameFormat = new RegExp("^[A-Z]{1}[A-Za-z]{2}");

const name = prompt("Enter Firs Name: ");
if(nameFormat.test(name))
    console.log(`Hello ${name}`);
else
    console.log("Enter Valid Name");