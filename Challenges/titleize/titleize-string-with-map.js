const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
//! DONT TOUCH ^^^


function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
//! DONT TOUCH ^^^



function correctCasing(word) {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
     
  }


  choosePhrase();
  
// Example string you can start with
let myString = "";


// Your Code Goes Here

// Should print: 'The Rain In Spain Falls Mainly On The Plain'
async function choosePhrase (){
  myString = await ask(`Please enter your phrase: \n>`)
  
  console.log(titleize(myString));
  
}
function titleize(myString) {

return myString.split(" ").map((word) => correctCasing(word)).join(" ");
}
choosePhrase();




/* 
let myString = ""
function titleize(myString) {
    return myString.split(" ").map((word) => correctCasing(word)).join(" ");
  }

choosePhrase();

async function choosePhrase() {
    myString = await ask(`Please enter your phrase: \n>`)
    console.log(titleize(myString));
    process.exit();
}
*/
//! what about letmyString = thats up higher?... wait i see it
//! Let me know if that worked - A
//! works. i needed to remove the return in the async


titleize(myString);

// write function to allow a user to enter their own phrase they want to titleize