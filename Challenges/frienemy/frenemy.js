const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
// ! Don't change anything above this line!!!






let userInput = "";
let enemyList = [];
async function whoYou () {
    let enemyList = ['cell', 'buu', 'frieza'];
    let friendList = ['goku', 'vegeta', 'picolo', 'gohan']
userInput1 = await ask("Which DBZ character are you?\n>")
let userInput = userInput1.toLowerCase().trim()

        if(enemyList.includes(userInput)){//searching the array){
            if (userInput === "buu") {
                console.log("Buu Hungry, turn you into chocolate!");
                whoYou();
            } else {
                console.log("Go Away")
                whoYou();
            }

        } else if (friendList.includes(userInput)) {
            if (userInput === "goku"){
                console.log("ITS THE LEGENDARY SUPER SAIYAN!")
                whoYou();
            } else  {   console.log("WARM GREETING")
        whoYou();
        }}
        else {
            console.log("hmmm I don't recognize you, maybe try a different character");
            whoYou();
        }
    }  
whoYou()

