/* 
.map()

- Does NOT destroy the original array
- If you have a blank index (array bucket) the function will not run on it.
- Takes another function that returns some value.
*/

let numbers = [4, 10, 5, 15];
let doubleNumbers = numbers.map((number) => number * 2);

console.log(numbers);
console.log(doubleNumbers);

let numbers2 = [4, 10, 5, 15];
let doubleNumbers2 = numbers2.map((number2) => number2 * 2);

let doubleNumbers3 = numbers.map(doubleNumberFunc);
function doubleNumberFunc(number2) {
  return number2 * 2;
}
console.log(numbers2);
console.log(doubleNumbers3);


let library = [
    {
      title: "A Game of Thrones",
      tags: ["fantasy", "george r.r. martin"],
    },
    {
      title: "Eloquent JavaScript",
      tags: ["technology", "programming", "marijn haverbeke"],
    },
    {
      title: "The Fellowship of the Ring",
      tags: ["fantasy", "jrr tolkien"],
    },
    {
      title: "The Return of the King",
      tags: ["fantasy", "jrr tolkien"],
    },
    {
      title: "The Anthropocene Reviewed",
      tags: ["nonfiction", "john green"],
    },
    {
      title: "The Left Hand of Darkness",
      tags: ["sci-fi", "ursula le guin "],
    },
  ];

  const bookTitles = library.map((book)=> book.title);
  console.log(bookTitles);

  const bookTitles4 = library.map((book) => {
    return book.title;
  });
  
  const bookTitles3 = library.map((book) => {
    return {
      title: book.title,
    };
  });




  const bookTitles2 = library.map((book)=> {return {title: book.title,};});
  console.log(bookTitles2);

  // ? Using the students array create a new array that has the names comibined using a .map()
//  result1: ["Mike Franks", "Brenda Banks"]
//  result2: [{fullName: "Mike Franks"}, {fullName: "Brenda Banks"}]

  let students = [
    { firstName: "Mike", lastName: "Franks" },
    { firstName: "Brenda", lastName: "Banks" },
    { firstName: "Cora", lastName: "Smith" },
  ];
  
  //1
  let combinedNames= students.map((student) => student.firstName + " " + student.lastName );
  console.log(combinedNames);

  //2 
  
// 1. is the new variable that im creating
// 2. is the array im looking at
// 3. is the method im applying to the array
// 4. is the new parameter that is really the students array, but just a new name for it so that the arrow function can run. 
// 5. return must be inside {} for the function to return something
// 6. the new object that Im creating, must be inside a new set of {} so that it creates an array because it is inside of function {}


  //        1              2      3     4           5        6          7   
  let combinedNames2 = students.map((student)=> {return {FullName: student.firstName +" " + student.lastName,};});
  console.log(combinedNames2);

// ? Create a function called getStringLengths(arrayOfStrings)
// ? The function will return an array with the length of the strings that are inside the given array
// Example: ["apple", "orange", "blackberry", "blueberry"]
// Expected Output: [5, 6, 10, 9]

function getStringLength(arrayOfStrings) {
    // create a variable set that equal to [array].map()
    let lengthOfArrayStrings = arrayOfStrings.map((string)=> string.length);
    return lengthOfArrayStrings;
}

const string1 = ["apple", "orange", "blackberry", "blueberry"];


console.log(getStringLength(string1));
console.log(getStringLength(combinedNames));