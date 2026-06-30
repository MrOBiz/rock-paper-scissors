function getComputerChoice(){
    let choice = (Math.random() * 100);

    if (choice >= 0 && choice < 33){
        console.log("Rock");
    }else if (choice >= 33 && choice < 66){
        console.log("paper");
    }else{
        console.log("Scissors");
    }
}

getComputerChoice();