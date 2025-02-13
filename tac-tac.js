const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];


const playerOne = {name:"playerOne", piece: "x"};
const playerTwo = {name:"playerTwo", piece: "o"};

function gameFlow() {
    //loops a player one turn and then a player two turn
    for (let i = 0; i<9; i++) {
        playerOneUpdate();
        playerTwoUpdate();
    }
}

//take P1's choice, check if valid, and update the array

function playerOneUpdate() {
    //choice BUTTONS
    let oneChoice = prompt("What does player one choose?");

    //check if choice is valid, update board, otherwise try again
    if ((gameBoard[oneChoice] != "x") && (gameBoard[oneChoice] != "o")) {
        gameBoard.splice(oneChoice, 1, "x");
    } else {
        console.log("choose again");
        playerOneUpdate();
    };

    //check if anyone won
    checkWin();

    console.log(gameBoard);
}

//take P2's choice, check if valid, and update the array

function playerTwoUpdate() {
    let twoChoice = prompt("What does player two choose?");

    if ((gameBoard[twoChoice] != "x") && (gameBoard[twoChoice] != "o")) {
        gameBoard.splice(twoChoice, 1, "o");
    } else {
        console.log("choose again");
        playerTwoUpdate();
    };

    checkWin();

    console.log(gameBoard);
}

//check if anyone won the game

function checkWin() {
    //check if play met win conditions, if so, alert them, then reset game board

    if ((gameBoard[0] == "x") && (gameBoard[1]=="x") && (gameBoard[2]=="x")) {
        alert("player one wins!")
        resetGame();
    } else if ((gameBoard[3] == "x") && (gameBoard[4]=="x") && (gameBoard[5]=="x")) {
        alert("player one wins!")
        resetGame();
    } else if ((gameBoard[6] == "x") && (gameBoard[7]=="x") && (gameBoard[8]=="x")) {
        alert("player one wins!")
        resetGame();
    } else if ((gameBoard[0] == "x") && (gameBoard[4]=="x") && (gameBoard[8]=="x")) {
        alert("player one wins!")
        resetGame();
    } else if ((gameBoard[2] == "x") && (gameBoard[4]=="x") && (gameBoard[6]=="x")) {
        alert("player one wins!")
        resetGame();
    } else if ((gameBoard[0] == "o") && (gameBoard[1]=="o") && (gameBoard[2]=="o")) {
        alert("player two wins!")
        resetGame();
    } else if ((gameBoard[3] == "o") && (gameBoard[4]=="o") && (gameBoard[5]=="o")) {
        alert("player two wins!")
        resetGame();
    } else if ((gameBoard[6] == "o") && (gameBoard[7]=="o") && (gameBoard[8]=="o")) {
        alert("player two wins!")
        resetGame();
    } else if ((gameBoard[0] == "o") && (gameBoard[4]=="o") && (gameBoard[8]=="o")) {
        alert("player two wins!")
        resetGame();
    } else if ((gameBoard[2] == "o") && (gameBoard[4]=="o") && (gameBoard[6]=="o")) {
        alert("player two wins!")
        resetGame();
    } //STALEMATE CONDITION
}

function resetGame() {
    //Reset Board: remove 9 elements, starting at index 0, replace with original values.
    gameBoard.splice(0, 9, 1, 2, 3, 4, 5, 6, 7, 8);
}

// gameFlow();







// OLD CODE

// function getPlayerOneChoice() {
//     let oneChoice = prompt("What does player one choose?");
//     console.log(oneChoice); 
//     return oneChoice;
//     //run updateboard
// }

// function getPlayerTwoChoice () {
//     let twoChoice = prompt("What does player two choose?");
//     console.log(twoChoice); 
//     return twoChoice;
//     // run updateboard
// }

// function updateBoardOne(choice) {
//     // take the choice (number), go to that, splice it out and add an x.
//     gameBoard.splice(choice, 1, "x");
// }

// function updateBoardTwo(choice) {
//     gameBoard.splice(choice, 1, "o");
// }





