/* 
Classes are a template for creating objects.
Classes encapsulate data with with code in order to work on that data

classes have methods NOT functions
Keyword "this" used in a class when referencing properties of the class

class come with a constructor method and that method is called first whe creat a new class object

class names are PascalCased:
CollegeStudents UniversityTeacher

To declar a class you must use the keyword "class"

*/

class Pizza {
    constructor(diameter, type){
        this.diameter = diameter;
        this.type = type;
    }
// Method Example:
bake() {
    return `Your ${this.diameter} inch pizza will be ready in 20 minutes`
}

}

//! to create an instance of this class we have to use the word new ClassName

let myPepperoniPizza = new Pizza(14, "pepperoni");

// ? how do i access properties on a class

console.log(myPepperoniPizza.diameter);
//works because this is a defined property in the class pizza
console.log(myPepperoniPizza.type);

// how do ichange the value of the diameter to 25?
myPepperoniPizza.diameter = 25;

console.log(myPepperoniPizza.diameter);

// ? How do I call a method created in a class
console.log(myPepperoniPizza.bake());


let cheesePizza = new Pizza(18, "extra cheese")

console.log(cheesePizza.diameter);

// ! Rectangle Example

/* 
create a rectangle class that will accept 2 parameters when creating the new rectangle (height, width)
*/

class Rectangle{
    constructor(height, width) {
        this.height=height;
        this.width=width;
    }
    isSquare(){
        return this.height === this.width;
      }
    area(){
        return this.height * this.width;
    }  
}


let rect1 = new Rectangle (10,5);
let rect2 = new Rectangle (20,20);
console.log(rect1.height);
let isSquare = rect1.height === rect1.width;
console.log(rect1.isSquare());
console.log(rect1.area());




class Pantry {
    constructor(initialPantryItems) {
      this.inventory = initialPantryItems;
    }
  
    displayInventory() {
      console.log(
        "The current items you have in your pantry are" + this.inventory
      );
    }
    addInventory(itemToBeAdded) {
        this.inventory.push(itemToBeAdded);
    }
    removeInventory(itemToBeRemoved) {
        let snapshotInventorySize = this.inventory.length
        this.inventory = this.inventory.filter((item)=> item !== itemToBeRemoved)
        return snapshotInventorySize === this.inventory.length 
        ? "No Items were removed" 
        : "Item was removed";
      }
  }
  
  let kitchenPantry = new Pantry(["beans", "noodles", "peanut butter"]);
  kitchenPantry.addInventory("fries");
  console.log(kitchenPantry.removeInventory("beans"));
  kitchenPantry.displayInventory();



  // let lastItem = kitchenPantry.inventory.pop();
// console.log(lastItem);

  let kitchenPantry2 = {
    inventory: ["beans", "noodles", "peanut butter"],
    displayInventory: function () {
      console.log(
        "The current items you have in your pantry are " + this.inventory
      );
    },
  };

// for zorkington
//  create a class for a room
// discription of the room
// what kind of inventory items would be in there?
