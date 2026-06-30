let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = prompt("What's your choice? (Rock, Paper, Scissors)", " ");

humanChoice = humanChoice.toLowerCase();

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

getHumanChoice(humanChoice);

/*function playRound(hChoice, cChoice){
    
    if(hChoice == "Rock" && cChoice == "Rock")
}

playRound(humanChoice, computerChoice);*/