let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = (Math.random() * 100);

    if (choice >= 0 && choice < 33){
        console.log("Computer: Rock");
        choice = "rock";
    }else if (choice >= 33 && choice < 66){
        console.log("Computer: Paper");
        choice = "paper";
    }else{
        console.log("Computer: Scissors");
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice(choice){
    
    switch (choice){
        case "rock":
            console.log("Rock");
            break;

        case "paper":
            console.log("Paper");
            break;

        case "scissors":
            console.log("Scissors");
            break;
    }
}

function finalWinner(cScore, hScore){
    if(computerScore > humanScore){
        console.log("Computer won the game!")
    }else if(computerScore < humanScore){
        console.log("You won the game!")
    }
}

function numberOfMatches(num){
    let i = 0;
    while(i<num){
        humanChoice = prompt("What's your choice? (Rock, Paper, Scissors)", " ");
        humanChoice = humanChoice.toLowerCase();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        i++;
    }
}

function playRound(hChoice, cChoice){

    humanChoice = getHumanChoice(humanChoice);
    
    if(hChoice == "rock" && cChoice == "rock"){
        console.log("Draw!");
    }else if(hChoice == "paper" && cChoice == "paper"){
        console.log("Draw!");
    }else if(hChoice == "scissors" && cChoice == "scissors"){
        console.log("Draw!");
    }else if(hChoice == "rock" && cChoice == "scissors"){
        console.log("You win!");
        humanScore +=1;
    }else if(hChoice == "paper" && cChoice == "rock"){
        console.log("You win!");
        humanScore +=1;
    }else if(hChoice == "scissors" && cChoice == "paper"){
        console.log("You win!");
        humanScore +=1;
    }else if(hChoice == "scissors" && cChoice == "rock"){
        console.log("Computer wins!");
        computerScore +=1;
    }else if(hChoice == "rock" && cChoice == "paper"){
        console.log("Computer wins!");
        computerScore +=1;
    }else if(hChoice == "paper" && cChoice == "scissors"){
        console.log("Computer wins!");
        computerScore +=1;
    }

    console.log(computerScore);
    console.log(humanScore);
}

function playGame(){
    playRound();
    numberOfMatches(5);
    finalWinner(computerScore, humanScore);
}

playGame();