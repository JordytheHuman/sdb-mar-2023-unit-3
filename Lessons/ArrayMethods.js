// Convert strings to arrays based of a space.

let words = "I really have been enjoying this coding camp!";
let wordArr = words.split(" ");
console.log(wordArr);

// Opposite of a Split is a Join

let wordJoin = wordArr.join("");
// = no spaces inbetween words
// = wordArr.join() has commas no spaces
// = wordArr.join(" ") has spaces in between
console.log(wordJoin);

//THE PUSH METHODS ADDS AN ELEMENT TO THE ARRAY


let studentNames = ["Trevor", "John"]
// Replace John with Simon
studentNames[1] = "Simon";
console.log(studentNames);

//? HOw do we add onto the array?
// Add Ashlee to the end of the array
// push to arrays to add new 
studentNames.push("Ashlee");
console.log(studentNames);

// .pop() will remove the last item in the array
let poppedStudent = studentNames.pop();
console.log(studentNames);
console.log(poppedStudent);
studentNames.push("Simon");

// .slice() returns a selected elements in an array and returns a new array.
// you can give it a start and stop point or oimit the stop point.

// is a start and a stop to a group. so you can isolate specific elements.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
console.log(fruits);
console.log(citrus);

// .splice() it will add or remove to the array element
// kinda works like slice and popped.
fruits.splice(1,2);
fruits.splice(2, 0, "Strawberry", "Grape");
console.log(fruits);

//.reverse() reverses the order of the array
let numberArr =[1, 2, 3, 4, 5, "winner"];
console.log(numberArr.reverse());

// .includes() method checks if the array inlcudes certain values
// returns true or false

const nums = [1, 2, 3, 4, 5, 4];

const includesThree = nums.includes(3);
console.log(includesThree);

// .indexOf() it will search the array for a specific element and returns the first index. If it doesn't find anything it returns -1

console.log(nums.indexOf(10));

