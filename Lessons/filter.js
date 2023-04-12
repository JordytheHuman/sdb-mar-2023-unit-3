/* 
Filter Method for Arrays


*/

// let fruits = ["apple", "banana", "mango", "orange", "pineapple"];
// console.log("apple" !== "mango");


// arror function '=>', the return is assumed
// console.log(fruits.filter(fruit=> fruit !== "mango"));

// same as arrow function.... way more written

/* function notMango(fruit) {
    if (fruit !== "mango") {
      return true;
    } else {
      return false;
    }
  }

  console.log(fruits.filter((fruit) => notMango(fruit)));  */

  let fruits = [
    "apple",
    "banana",
    "mango",
    "orange",
    "pineapple",
    "blueberry",
    "strawberry",
    "cranberry",
    "blackberry",
  ];
  console.log("mango" !== "mango");
  
  console.log(fruits.filter((fruit) => fruit !== "mango"));
  console.log(fruits);
  
  let noBanana = fruits.filter((fruit) => fruit !== "banana");
  console.log("no banana " + noBanana);

  let onlyBerry = fruits.filter((fruit) => fruit.includes("berry"));
  console.log(onlyBerry);



  let numArr = [];
for (let i = 1; i <= 50; i++) {
  numArr.push(i);
}
console.log(numArr);

//
let evenNumbers = numArr.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//
let threeOrFiveNumbers = numArr.filter((num) => num % 3 == 0 || num % 5 ==0);
console.log(threeOrFiveNumbers);

//
let threeAndFiveNumbers = numArr.filter((num) => num % 3 == 0 && num % 5 ==0);
console.log(threeAndFiveNumbers);



let movies = [
{
    name: "Star Wars",
    category: "Sci-fi"
},
{
    name: "Lord of the Rings",
    category: "Fantasy"
},
{
    name: "Dune",
    category: "Sci-fi"
}
]

movies.push({ name: "ALien", category: "Sci-fi"});
movies.push({ name: "Harry Potter", category: "Fantasy"});

console.log(movies);

let scifiMovies = movies.filter((movie) => movie.category === "Sci-fi");
console.log(scifiMovies);