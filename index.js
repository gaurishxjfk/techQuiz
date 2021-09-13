var readLineSync = require("readline-sync");
const chalk = require('chalk');


var score = 0;
var userName = readLineSync.question("Whats your name?");

console.log("Welcome " + userName + ". Lets play Tech quiz with you.");
console.log(chalk.bgBlue('--------Level 1-----------'));

//play function
function play(que, ans) {
  var userAns = readLineSync.question(que);

  if (userAns.toLowerCase() === ans.toLowerCase()) {
    console.log(chalk.green("Whoaa!!! Thats Correct!"));
    score++;
  } else {
    console.log(chalk.red("Oops , sorry wrong answer!"));
  }
  console.log("Your current score is : ", score);
  console.log('------------------------------')
}

var highScorer = [
  {
    name: "Gaurish",
    score: "3"
  },
  {
    name: "Shef",
    score: "2"
  }
];

var questions = [
  {
    que: "Which company manufactures macbook? ",
    ans: "apple"
  },
  {
    que: "Which company was founded by bill gates? ",
    ans: "microsoft"
  },
   {
    que: "Which indian startup recently launched its IPO in india",
    ans: "zomato"
  },
   {
    que: "Which company was founded by Kunal Shah? ",
    ans: "cred"
  },
  {
    que: "Mark zuckerburg is founder of ? ",
    ans: "facebook"
  }
];

var questionslvl2 = [
  {
    que: "Which popular js framework created by facebook?",
    ans: "react"
  },
  {
    que: "Ecma Script is related to which language/script",
    ans: "javascript"
  },

];

// for (let i = 0; i < questions.length ; i++){
//   play(questions[i].que,questions[i].ans);
// }

questions.map(i => {
  play(i.que, i.ans);
});

if (score === 5) {
  console.log("Congrates! You're qualified for next level");
  console.log(chalk.bgBlue('--------Level 2-----------'));
  questionslvl2.map(i => {
    play(i.que, i.ans);
  });
} else if (score === 0) {
  console.log("Sorry, read more and come");
  console.log("--------------------------------");
}
else if (score === 7) {
  console.log("Congrates! You completed both levels");
  console.log("--------------------------------");
} else {
  console.log(chalk.bold("YAY!! " + score + " is your final score!"));
  console.log("--------------------------------");
}
//check for highest scorer
for (let j = 0; j < highScorer.length; j++) {
  if (score > highScorer[j].score) {
    console.log("Congrates, you just went past ", highScorer[j].name);
    break;
  }
}
