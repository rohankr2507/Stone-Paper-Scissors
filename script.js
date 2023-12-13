let options = ["Stone", "Paper", "Scissors"];

let trial = 3;
let humanChoice;
let computerChoice;

let humanScore = 0;
let cpuScore = 0;

let you = document.getElementById('yourScore');
let cpu = document.getElementById('cpuScore');

let newGame = document.getElementById('newGame');

const buttons = document.querySelectorAll('.btn');

buttons.forEach((e) => e.addEventListener('click', () => {
    computerChoice = options[Math.floor(Math.random() * options.length)];
    humanChoice = e.value;

    console.log(computerChoice);
    console.log(humanChoice);

    win(computerChoice, humanChoice);

    you.innerHTML = humanScore;
    cpu.innerHTML = cpuScore;

    if (trial == 0) {
        if (humanScore > cpuScore) {
            alert("You Win");
        }
        else if (humanScore == cpuScore) {
            alert("Match Tie");
        }
        else {
            alert("You Lost");
        }
    }
}));

const win = (cpu, human) => {
    if (cpu == 'Paper' && human == 'Stone') {
        cpuScore++;
        console.log("CPU Winner");
    }
    else if (cpu == 'Stone' && human == 'Paper') {
        humanScore++;
        console.log("You Winner");
    }
    else if (cpu == 'Scissors' && human == 'Paper') {
        cpuScore++;
        console.log("CPU Winner");
    }
    else if (cpu == 'Paper' && human == 'Scissors') {
        humanScore++;
        console.log("You Winner");
    }
    else if (cpu == 'Stone' && human == 'Scissors') {
        cpuScore++;
        console.log("CPU Winner");
    }
    else if (cpu == 'Scissors' && human == 'Stone') {
        humanScore++;
        console.log("You Winner");
    }
    else {
        console.log("Tie");
    }
    trial--;
};

newGame.addEventListener('click', () => {
    trial = 3;
    humanScore = 0;
    cpuScore = 0;
    you.innerHTML = "0";
    cpu.innerHTML = "0"
});