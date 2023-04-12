/* 
- create a function called bowlingAverage
- the function shall accept a single parameter (which will be an array)
- the function should return the average score based on the size of the array that gets supplied to a function.

Special notes Special Notes: use a FOR OF LOOP

example: let bowler1 = bowlingAverage([150, 212, 153])
         console.log(bowler1)


*/

// let bowlingScores = [150, 212, 153];
// let totalScore = 0;
// let i=0

// function BowlingAvg (bowlingScores) {
//     totalScore = totalScore + bowlingScore
//     return totalScore
// }

// for (i=0; i < bowlingScores.length; i++) {
//     let bowlingAverage = BowlingAvg;
//     totalScore += bowlingScores[i]; 
//     console.log(bowlingAverage)
// }


//This is what John Has
// let bowlingScores = [150, 212, 153]
// const gamesPlayed = bowlingScores.length
// let totalScore = 0;
// let averageScore = 0;

// for (let i = 0; i < gamesPlayed; i++) {
//     let gameScore = bowlingScores[i];
//     console.log(+gameScore);
//     totalScore = totalScore + gameScore;
    //totalScore = parseInt(totalScore);
//     console.log(`Total score is  ${totalScore} after ${i+1} games.`)
//   }
//   averageScore = Math.round(totalScore / gamesPlayed);

//   console.log(`The Average score of this player is ${averageScore}`);

//   function bowlingAverage (bowlingScores) {
       
//   }
  

let playerName = "Jordan";
let playerScores = [150, 212, 153];

const gamesPlayed = playerScores.length;

let totalScore = 0;
let averageScore = 0;

function bowlingAverage(bowlingScores) {
  for (let i = 0; i < gamesPlayed; i++) {
    let gameScore = bowlingScores[i];
    console.log(+gameScore);
    totalScore += gameScore; //totalScore = totalScore + gameScore;
    //totalScore = parseInt(totalScore);
    console.log(`Total score is  ${totalScore} after ${i + 1} games.`);
  }
  averageScore = Math.round(totalScore / gamesPlayed);

  console.log(`The Average score of this player is ${averageScore}`);
  return averageScore;
}

console.log(
  `The average score of ${playerName} is ${bowlingAverage(playerScores)}`
);

  
  /* 
let bowler1Scores = [150,212,153]
let bowler2Scores = [250,232,198]

write a function that will take two different arrays as parameters.
inside the function have for loop that will combine the two bowlers scores into a combined array

example output: [400, 444, 351 ]

*/
let playerName2 = "Jordan";
let bowler1Scores = [150, 212, 153];
let bowler2Scores = [250, 232, 198];
const gamesPlayed2 = bowler1Scores.length;
let combinedscores = [];
let totalCombinedScore = 0;
let averageScore2 = 0;
let i =0;

function bowling2(bowler1Scores, bowler2Scores) {
  for (i = 0; i < gamesPlayed2; i++) {
    
    let sumGameScore = bowler1Scores[i] + bowler2Scores[i];
    
    console.log(+sumGameScore);
    combinedscores.push(sumGameScore); 
    totalCombinedScore += sumGameScore; 
    console.log(combinedscores);
    console.log(`Total combined score is  ${totalCombinedScore} after ${i + 1} games.`);
  }
  

 
}
bowling2(bowler1Scores, bowler2Scores);






/* 

let bowler1Scores = [150,212,153]
let bowler2Scores = [250,232,198]

create a function takes two arrays as parameters it should return the combined bowlers scores as the following.

teamGrouping: [[150, 250], [212,232] [153,198]]


*/


let bowler1Scores3 = [150, 212, 153];
let bowler2Scores3 = [250, 232, 198];
const gamesPlayed3 = bowler1Scores.length;
let combinedscores3 = [];
let totalCombinedScore3 = 0;
let averageScore3 = 0;


function bowling3(bowler1Scores3, bowler2Scores3) {
  for (i = 0; i < gamesPlayed3; i++) {
    
    let sumGameScore3 = (bowler1Scores3[i].toString() + ", " + bowler2Scores3[i].toString).toString();
    
    console.log(+sumGameScore3);
    combinedscores.push(sumGameScore3); 
    totalCombinedScore3 += sumGameScore3; 
    console.log(combinedscores3);
    console.log(`Total combined score is  ${totalCombinedScore3} after ${i + 1} games.`);
  }
  

 
}
bowling3(bowler1Scores3, bowler2Scores3);


let bowler3Scores = [150,212,153]
let bowler4Scores = [250,232,198]
const gamesPlayed3 = bowler3Scores.length;
const gamesPlayed4 = bowler4Scores.length;
let roundPlacement = [];

if(bowler3Scores.length === bowler4Scores.length){
    roundBowlerScores(bowler3Scores, bowler4Scores, roundPlacement);
    console.log(roundPlacement);
}else{
    console.log(`bowler1 and bowler 2 did not play the same number of games.`);
}

function roundBowlerScores(scores3,scores4,roundScore){
for (let i = 0; i < gamesPlayed3; i++) {
    let gameScore = [];
    gameScore.push(scores3[i]);
    gameScore.push(scores4[i]);
    roundScore.push(gameScore);
  }
  return roundPlacement;
}