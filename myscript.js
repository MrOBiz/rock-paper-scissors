const humanScore = 0;
const computerScore = 0;

const computerChoice = getComputerChoice();
const humanChoice = prompt("What's your choice? (Rock, Paper, Scissors)", " ");



function getComputerChoice(){
    let choice = (Math.random() * 100);

    if (choice >= 0 && choice < 33){
        console.log("Computer: Rock");
        choice = "Rock";
    }else if (choice >= 33 && choice < 66){
        console.log("Computer: Paper");
        choice = "Paper";
    }else{
        console.log("Computer: Scissors");
        choice = "Scissors";
    }

    return choice;
}

function getHumanChoice(choice){
    
    switch (choice){
        case "Rock":
            console.log("Rock");
            break;

        case "Paper":
            console.log("Paper");
            break;

        case "Scissors":
            console.log("Scissors");
            break;
    }
}

getHumanChoice(humanChoice);