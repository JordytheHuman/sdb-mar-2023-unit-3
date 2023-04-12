/* 
Write a JS function that will take a positive integer and returns the sum of all the digits.

use a loop to iterate through the digits and add them.

create a function called sumDigits that takes one argument

ex: console.log(sumDigits(123)) // 
Expected output = 6

ex: console.log(sumDigits(9877)) // 
Expected output = 30

*/


/* 
Brainstorm tools
is there a tool out there that will tell me how many times to run this loop
its going to be a for loop

*/

let myName = "Seth";
console.log(myName.length);

let newNumber = 1234;
console.log(newNumber.length);

const newNumberString = newNumber.toString();
console.log(newNumberString.length);

console.log(newNumberString.charAt(1));// because it's a string I can use charAt

// ? What if I wanted to add the first digit to the second digit?

let addingNumbers = +newNumberString.charAt(0) + parseInt(newNumberString.charAt(1)) + Number(newNumberString.charAt(2));  
// add a + to the variable or parseInt or Number so we need to convert it to a number before adding.
// console.log(addingNumbers)

// addingNumbers = +newNumberString.charAt(i)



function changingNumbers (num) {
    let stringNum = num.toString()
    let currentTotal = 0
    for (let i = 0; i < stringNum.length; i++) {
        let addingNums = +stringNum.charAt(i);
       currentTotal += addingNums; 
       console.log(currentTotal);
    }
    let total = currentTotal;
    console.log(total)

}
changingNumbers (123456789);


/* 
let i = 0
for (i=0; i < +newNumberString.length + 1; i++) {
    
  
} */


