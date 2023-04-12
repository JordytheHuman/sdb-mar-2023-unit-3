let person1 = ["Rob", 42, "indianapolis", "indiana"];
let name1 = person1[0];
let age1 = person1[1];

let person2 = ["Bobur", 19, "denver", "colorado"];

let [name2, age2, city2, state2] = ["Bobur", 19, "denver", "colorado"];

console.log(age2);

let terminalEntry1 = "look note"; // ex: ["look", "note"]
let terminalEntryArr = terminalEntry1.split(" ");
// or
let [command, noun] = terminalEntry1.split(" ");
console.log(command);
console.log(noun);
console.log(terminalEntryArr);

function areaAndVolume(length) {
    // let area = length * 2;
    // let volume = length ** 3;
    // return [area, volume];

    return [length ** 2, length** 3];
  }
  
  let cube1 = areaAndVolume(5);
  console.log(cube1);
  console.log(cube1[0]); //area




  function areaAndVolume2(length) {
    return [length ** 2, length ** 3];
  }
  
  let cube2 = areaAndVolume2(5);
  console.log(cube2);
  console.log(cube2[0]);
  
  let [cube2Area, cube2Volume] = areaAndVolume2(5);
  
  console.log(cube2Volume);
  
// ! Objects Destructuring

let student11 = {
    name11: "hans",
    age11: "34",
    grades11: [100, 75, 68]
};

console.log(student11.name11);

let { name11, age11, grades11 } = student11;

console.log(name11, age11, grades11);

let student2 = {
    nameOfStudent: "Luke",
    age: 24,
    grades: [65, 25, 140],
  };
  
  // relabeling the nameOfStudent to name
  let { nameOfStudent: name, age } = student2;
  
  console.log(name, age);

  function printThings ({greeting, name}) {
    console.log(`${greeting}, ${name}`);

  }
  
printThings({greeting: "Good Morning", name: "Billy"});


class Room {
  constructor(name, description, doorlock, inventory){

  }
};
//needs exact order of constructor


class Room2 {
  constructor({name, description, doorlock, inventory}){
    this.name = name;
    this.description = description;
    this.doorlock = doorlock;
    this.inventory = inventory;
  }
  displayInventory(){
    return `You have the following items in this room` + this.inventory
  }
};
//does not need exact order for constructor!!!!! because {curly boys}

//! Do the Curly Boy one!
let foyer = new Room2 ({
  name: "foyer",
  doorLock: false,
  inventory: ["hammer", "note"],
  description: "You have now entered the foyer..."
});

// let kitchen = new Room (
//   "Kitchen", "You have now entered the kitchen", false, ["hammer", "note"]);

let bedroom = new Room2({
    name: "bedroom",
    doorLock: false,
    inventory: ["pillow", "sheets"],
    description: "You have now enter bedroom...."
  })
  
  let state = {
    foyer: foyer,
    bedroom: bedroom
  }

  let currentState = "foyer"

  console.log(state[currentState].displayInventory());