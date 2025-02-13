const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];


const playerOne = {name:"playerOne", piece: "x"};
const playerTwo = {name:"playerTwo", piece: "o"};

function gameFlow () {
    // LOOP
    //p1 choice
    //update board
    //check win condition

    //p2 choice
    //update board
    //check win condition
}

//take P1's choice, check if valid, and update the array

function playerOneUpdate() {
    let oneChoice = prompt("What does player one choose?");

    if ((gameBoard[oneChoice] != "x") && (gameBoard[oneChoice] != "o")) {
        gameBoard.splice(oneChoice, 1, "x");
    } else {
        console.log("choose again");
        playerOneUpdate();
    };

    console.log(gameBoard);

    checkWin();
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

    console.log(gameBoard);

    checkWin();
}



//012
//345
//678

//check if P1 won the game

function checkWin() {
    if ((gameBoard[0] == "x") && (gameBoard[1]=="x") && (gameBoard[2]=="x")) {
        alert("player one wins!")
    } else if ((gameBoard[3] == "x") && (gameBoard[4]=="x") && (gameBoard[5]=="x")) {
        alert("player one wins!")
    } else if ((gameBoard[6] == "x") && (gameBoard[7]=="x") && (gameBoard[8]=="x")) {
        alert("player one wins!")
    } else if ((gameBoard[0] == "x") && (gameBoard[4]=="x") && (gameBoard[8]=="x")) {
        alert("player one wins!")
    } else if ((gameBoard[2] == "x") && (gameBoard[4]=="x") && (gameBoard[6]=="x")) {
        alert("player one wins!")
    } else if ((gameBoard[0] == "x") && (gameBoard[1]=="x") && (gameBoard[2]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[3] == "x") && (gameBoard[4]=="x") && (gameBoard[5]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[6] == "x") && (gameBoard[7]=="x") && (gameBoard[8]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[0] == "x") && (gameBoard[4]=="x") && (gameBoard[8]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[2] == "x") && (gameBoard[4]=="x") && (gameBoard[6]=="o")) {
        alert("player two wins!")
    }
}

function checkTwoWin() {
    if ((gameBoard[0] && gameBoard[1] && gameBoard[2]) == "o") {
        alert("player two wins!")
    } else if ((gameBoard[3] && gameBoard[4] && gameBoard[5]) == "o") {
        alert("player two wins!")
    } else if ((gameBoard[6] && gameBoard[7] && gameBoard[8]) == "o") {
        alert("player two wins!")
    } else if ((gameBoard[0] && gameBoard[4] && gameBoard[8]) == "o") {
        alert("player two wins!")
    } else if ((gameBoard[2] && gameBoard[4] && gameBoard[6]) == "o") {
        alert("player two wins!")
    }  
}


function resetGame () {
    gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}


playerOneUpdate();
playerTwoUpdate();
playerOneUpdate();
playerTwoUpdate();
playerOneUpdate();
playerTwoUpdate();
playerOneUpdate();
playerTwoUpdate();




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





