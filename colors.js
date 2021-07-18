
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const black = document.getElementById("black");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const pink = document.getElementById("pink");
const orange = document.getElementById("orange");

let startBtn = document.getElementById("start-btn");
let colorsGame = document.getElementById("colors-game");
let randomInstruction;
randomInstructionIndex = 0;
let instructionDiv = document.getElementById("instruction");



let instructions = [{
    instruction: "Touch the color Purple!",
    correct: purple
},

{
    instruction: "Touch the color Green!",
    correct: green
},

{
    instruction: "Touch the color Black!",
    correct: black
},

{
    instruction: "Touch the color Yellow!",
    correct: yellow
},

{
    instruction: "Touch the color Blue!",
    correct: blue
},

{
    instruction: "Touch the color Red!",
    correct: red
},

{
    instruction: "Touch the color Pink!",
    correct: pink
},

{
    instruction: "Touch the color Orange!",
    correct: orange
},
];




function startGame() {
    colorsGame.classList.remove("hide");
    startBtn.classList.add("hide");
    randomInstruction = instructions.sort(() => Math.random() - .5);
    nextInstruction();
    console.log(randomInstruction);
};

function nextInstruction() {
    showInstruction(randomInstruction[randomInstructionIndex]);
};

function showInstruction(instructions) {
    instructionDiv.innerHTML = instructions.instruction;
};


    /* events */

startBtn.addEventListener("click", () => {
    startGame();
    showInstruction();
});

colorsGame.addEventListener("click", (e) => {
    console.log(e.target);

    if (instructions[randomInstructionIndex].correct === e.target) {
        instructionDiv.innerHTML = "Correct!";
    }

    else {instructionDiv.innerHTML = "Sorry, try again.";
}
});

// document.querySelectorAll('.colors').forEach(item => {
//     colorsGame.addEventListener('click', (e) => {
//       //handle click
//       if (instructions[randomInstructionIndex].correct === e.target.id) {
//         instructionDiv.innerHTML = "Correct!";
//         console.log(e.target);
//     }

//     else {instructionDiv.innerHTML = "Sorry, try again.";
// };
//     })
//   });