let humanInput = +prompt("What's your choice? 1: Rock, 2: Paper, 3: Scissors", " ");

function getComputerChoice(){
    let choice = (Math.random() * 100);

    if (choice >= 0 && choice < 33){
        console.log("Computer: Rock");
    }else if (choice >= 33 && choice < 66){
        console.log("Computer: Paper");
    }else{
        console.log("Computer: Scissors");
    }
}

getComputerChoice();

function getHumanChoice(choice){
    
    switch (choice){
        case 1:
            console.log("Rock");
            break;

        case 2:
            console.log("Paper");
            break;

        case 3:
            console.log("Scissors");
            break;
    }
}

getHumanChoice(humanInput);