
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const black = document.getElementById("black");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const pink = document.getElementById("pink");
const orange = document.getElementById("orange");
const incorrect = document.getElementById("incorrect");
let startBtn = document.getElementById("start-btn");
let colorsGame = document.getElementById("colors-game");
let randomInstruction;
let randomInstructionIndex = 0;
let instructionDiv = document.getElementById("instruction");



let instructions = [{
    instruction: "Touch the color Purple!",
    correct: purple,
    wrong: false
},

{
    instruction: "Touch the color Green!",
    correct: green,
    wrong: false
},

{
    instruction: "Touch the color Black!",
    correct: black,
    wrong: false
},

{
    instruction: "Touch the color Yellow!",
    correct: yellow,
    wrong: false
},

{
    instruction: "Touch the color Blue!",
    correct: blue,
    wrong: false
},

{
    instruction: "Touch the color Red!",
    correct: red,
    wrong: false
},

{
    instruction: "Touch the color Pink!",
    correct: pink,
    wrong: false
},

{
    instruction: "Touch the color Orange!",
    correct: orange,
    wrong: false
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
    instructionDiv.classList = "instructions";
};

function showInstruction(instructions) {
    console.log(instructions);
    instructionDiv.innerHTML = instructions.instruction;
};

function hidePrompt() {

}


/* events */

startBtn.addEventListener("click", () => {
    randomInstructionIndex = 0;
    startGame();
    // showInstruction();
});

/* clicking on a color */

colorsGame.addEventListener("click", (e) => {
    console.log(e.target);

    /* correct answer */
    if (instructions[randomInstructionIndex].correct === e.target) {
        instructionDiv.innerHTML = "Correct!";

        console.log("correct!");
        randomInstructionIndex = randomInstructionIndex + 1

        /* wrong answer */
    } else {
        instructionDiv.classList = "wrong";
        instructionDiv.innerHTML = "Sorry try again!";
        // incorrect.classList.remove("hide");
        // randomInstructionIndex = randomInstructionIndex - 1
        // clearTimeout(nextInstruction(), instructionDiv.classList.add("hide"));
    }

    if (randomInstructionIndex >= 8) {
        instructionDiv.innerHTML = "Correct! You touched all of the colors!"
        setTimeout(function () {
            colorsGame.classList.add("hide");
            startBtn.classList.remove("hide")
            document.getElementById("start-btn").innerHTML = "Play Again";

        }, 3000)

    } else {
        setTimeout(function () {
            // incorrect.classList.add("hide");         
            instructionDiv.classList.remove("hide");          
            nextInstruction();
        }, 1000)

    };
});

