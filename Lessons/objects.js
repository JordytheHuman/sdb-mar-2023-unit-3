/* 
OBJECTS
- Objects contain properties
- They are setup in KEY & VALUE pairs
- KEYS will ALWAYS be strings and it CAN be multiple words but most of the time it will be one word. If you're using multiple words and you don't want a space between them you can use Camel Casing as a convention.
ex: "SEnt From" to "sentFrom"

- VALUES: string, numbers, boolean, undefined, null, array, objects


need commas in between key value pairs
*/


let lilly = {
    name: "lilly",
    age: 15,
    breed: "mini poodle",
    color: "gray",
    spayed: true,
    weight: 8,
    favoriteActivty: ["play with her food", "bite owner"],
    "household owners": ["father", "mother", "simon"],
  };
  
  let lola = {
    name: "lola",
    age: 1.75,
    breed: "mini sch",
    color: "gray",
    spayed: true,
    weight: 14,
    favoriteActivty: [
      "running", "chewing", "chasing bugs"
    ],
    "household owners": ["ashlee", "grant"],
  };
  
  let minnie = {
      name: "minnie",
      age: 2,
      breed: "coton de tulear",
      color: "white",
      spayed: true,
      weight: 5,
      favoriteActivty: [
        "running in yard",
        "playing with duck",
        "getting belly rubbed",
      ],
      "household owners": ["john", "scarlem"],
    };
  
  // ? How do we access data within the object
  // ! Dot Notation
  console.log(lilly.age);
  // ? How do I access color
  console.log(lilly.color);
  // ? How do I access "play with her food"
  console.log(lilly.favoriteActivty[0]);
  
  // ! Square Bracket Notation
  // ? How do I access "house hold owners"
  console.log(lilly["household owners"]);
  
  // ! Altering values in an object
  lilly.weight = 9;
  console.log(lilly.weight);
  
  // ! Adding a new key and value to an existing object
  lilly.gender = "female";
  console.log(lilly);
  
  // ! Combining Objects into an array
  let studentPetArray1 =[lilly, minnie, lola];
  console.log("studentArray1: ", studentPetArray1);
 
let studentPetArray2 = [];
studentPetArray2.push(lilly);
studentPetArray2.push(minnie);
studentPetArray2.push(lola);

console.log("studentArray2: ", studentPetArray2);

/* 
Create a Loop that will go through studentPetArray1 and it will console log the following.

"[pet name] is [age] years old who weights [weight] lbs"

bonus: "[pet name] is [age] years old who weights [weight] lbs. And [pet name]'s favorite activites are the following [favorite activites(with commas)]"

*/





for (let i = 0; i <studentPetArray1.length; i++) {
    
    let lastActivity = studentPetArray1[i].favoriteActivty.pop()

    console.log(`${studentPetArray1[i].name} is ${studentPetArray1[i].age} years old who weights ${studentPetArray1[i].weight} lbs and ${studentPetArray1[i].name}'s favorite activities are the following: ${studentPetArray1[i].favoriteActivty.join(", ")} and ${lastActivity}.`);
    }

// did both bonus challenges. it was not challenging. and the "and between the second to last and last activity.
// " just had to do .pop on the activities to make it more grammatically correct by seperating out the final activity with an and