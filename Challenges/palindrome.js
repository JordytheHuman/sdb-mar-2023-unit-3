/* 
Write out a function that takes one parameter called phrase 

Inside the function you shoud be able to return true if the reversed phrase is the same as the supplied phrase

ex: racecar /true
ex: taco cat /true
ex apple / false
ex: madam im adam /true


*/
// interview questions 
// just want to see how you go about solving this. do you just give up?
/* 
how do i reverse it?
it can only be an array to reverse
how do I make it an array?
split it
how do i get rid of the spaces?
join it

*/
function isPalindrome(phrase) {
    phrase = phrase.replaceAll(" ", "").toLowerCase();
    console.log(phrase);
    let reversedPhrase = phrase.split("").reverse().join("");
  
    // reversedPhrase = reversedPhrase.replace(" ", "");
  
    console.log(reversedPhrase);
    let foundMatch = phrase === reversedPhrase;
    return foundMatch;
  }
  
  console.log(isPalindrome("madam im adam"));
  
  function isPalindrome2(phrase) {
    let reversedPhrase = phrase
      .replaceAll(" ", "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("");
  
    return phrase.repla === reversedPhrase;
  }

  function isPalindrome2(phrase) {
    return (
      phrase.replaceAll(" ", "").toLowerCase() ===
      phrase.replaceAll(" ", "").toLowerCase().split("").reverse().join("")
    );
  }

  const isPalindrome3 = (phrase) =>
  phrase.replaceAll(" ", "").toLowerCase() ===
  phrase.replaceAll(" ", "").toLowerCase().split("").reverse().join("");

  // .includes() method checks if the array includes certain values and returns true or false

  const nums = [1, 2, 3, 4, 5, 141, "141"];

const includesThree = nums.includes(3);
console.log(includesThree);

// .indexOf() it will search the array for a specific element and returns the first index. If it doesn't find anything it returns -1

console.log(nums.indexOf(10));