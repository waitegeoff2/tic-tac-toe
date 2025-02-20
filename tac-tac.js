const boxOne = document.querySelector(".one");
const boxTwo = document.querySelector(".two");
const boxThree = document.querySelector(".three");
const boxFour = document.querySelector(".four");
const boxFive = document.querySelector(".five");
const boxSix = document.querySelector(".six");
const boxSeven = document.querySelector(".seven");
const boxEight = document.querySelector(".eight");
const boxNine = document.querySelector(".nine");
const newGame = document.querySelector(".new-game");
const gameStatus = document.querySelector(".status");
const nameForm = document.querySelector("#add-name-form");
const submitButton = document.querySelector(".submit-button");


// Below is a module. I didn't add it but this is where it would go. 

// const gameGrid = (function() {
//     const board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//     const gameBoard = () => board;

//     return {gameBoard};

// })();

const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const playerOne = {name:"playerOne", piece: "x"};
const playerTwo = {name:"playerTwo", piece: "o"};

let turn = 2;

function gameFlow(choice) {

    //switch turns each time
    if (turn % 2 == 0) {
       playerOneUpdate(choice);
       gameStatus.textContent = ((playerTwo.name) + "'s turn");
    } else {
       playerTwoUpdate(choice);
       gameStatus.textContent = ((playerOne.name) + "'s turn");
    };

    turn++;

    console.log(gameBoard);
    console.log(turn);
};

function playerOneUpdate(choice) {    

    //check if choice is valid, update board, otherwise try again
    if ((gameBoard[choice] != "x") && (gameBoard[choice] != "o")) {
        //update array
        gameBoard.splice(choice, 1, "x");
        // update board HTML
        gameBoardUpdatePOne(choice);
    } else {
        alert("choose again");
        playerOneUpdate(choice);
    };

    //check if someone won

    checkWin();
}

//take P2's choice, check if valid, and update the array and divs

function playerTwoUpdate(choice) {

    if ((gameBoard[choice] != "x") && (gameBoard[choice] != "o")) {
        gameBoard.splice(choice, 1, "o");
        gameBoardUpdatePTwo(choice);
    } else {
        alert("choose again");
        playerTwoUpdate(choice);
    };

    checkWin(); 
}

function checkWin() {
    //check if play met win conditions, if so, alert them, then reset game board

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
    } else if ((gameBoard[0] == "x") && (gameBoard[3]=="x") && (gameBoard[6]=="x")) {
        alert("player one wins!")
    } else if ((gameBoard[1] == "x") && (gameBoard[4]=="x") && (gameBoard[7]=="x")) {
        alert("player one wins!")
    } else if ((gameBoard[2] == "x") && (gameBoard[5]=="x") && (gameBoard[8]=="x")) {
        alert("player one wins!")
    } else if ((gameBoard[0] == "o") && (gameBoard[1]=="o") && (gameBoard[2]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[3] == "o") && (gameBoard[4]=="o") && (gameBoard[5]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[6] == "o") && (gameBoard[7]=="o") && (gameBoard[8]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[0] == "o") && (gameBoard[4]=="o") && (gameBoard[8]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[2] == "o") && (gameBoard[4]=="o") && (gameBoard[6]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[0] == "o") && (gameBoard[3]=="o") && (gameBoard[6]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[1] == "o") && (gameBoard[4]=="o") && (gameBoard[7]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[2] == "o") && (gameBoard[5]=="o") && (gameBoard[8]=="o")) {
        alert("player two wins!")
    } else if ((gameBoard[0] != 0) && (gameBoard[1] != 1) && (gameBoard[2] != 2) && (gameBoard[3] != 3) && (gameBoard[4] != 4) && (gameBoard[5] != 5) && (gameBoard[6] != 6) && (gameBoard[7] != 7) && (gameBoard[8] != 8)) {
        alert("it's a tie!");       
    }
    // Tie condition: none of the array items equal their original numbers.
}

// update game board each time, I know there's a better way of doing this....

function gameBoardUpdatePOne(choice) {
    if (choice == 0) {
        boxOne.textContent = "x";
    } else if (choice == 1) {
        boxTwo.textContent = "x"; 
    } else if (choice == 2) {
        boxThree.textContent = "x"; 
    } else if (choice == 3) {
        boxFour.textContent = "x"; 
    } else if (choice == 4) {
        boxFive.textContent = "x"; 
    } else if (choice == 5) {
        boxSix.textContent = "x";
    } else if (choice == 6) {
        boxSeven.textContent = "x"; 
    } else if (choice == 7) {
        boxEight.textContent = "x"; 
    } else if (choice == 8) {
        boxNine.textContent = "x";
    }
}

function gameBoardUpdatePTwo (choice) {
    if (choice == 0) {
        boxOne.textContent = "o";
    } else if (choice == 1) {
        boxTwo.textContent = "o"; 
    } else if (choice == 2) {
        boxThree.textContent = "o"; 
    } else if (choice == 3) {
        boxFour.textContent = "o"; 
    } else if (choice == 4) {
        boxFive.textContent = "o"; 
    } else if (choice == 5) {
        boxSix.textContent = "o";
    } else if (choice == 6) {
        boxSeven.textContent = "o"; 
    } else if (choice == 7) {
        boxEight.textContent = "o"; 
    } else if (choice == 8) {
        boxNine.textContent = "o";
    }
}

function resetGame() {
    //Reset Board: remove 9 elements, starting at index 0, replace with original values.
    gameBoard.splice(0, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8);
    //reset divs
    boxOne.textContent="";
    boxTwo.textContent="";
    boxThree.textContent="";
    boxFour.textContent="";
    boxFive.textContent="";
    boxSix.textContent="";
    boxSeven.textContent="";
    boxEight.textContent="";
    boxNine.textContent="";
    
}

// to update names by filling out form

function updateName(event) {
    event.preventDefault();
    
        const p1Name = document.querySelector("#p1-name");
        const p2Name = document.querySelector("#p2-name");

        playerOne.name = p1Name.value;
        playerTwo.name = p2Name.value;

        nameForm.reset();
};

nameForm.addEventListener("submit", updateName); 

// Each div click = choice.

boxOne.addEventListener('click', () => {
    if ((gameBoard[0] != "x") && (gameBoard[0] != "o")) {
    choice = 0;
    gameFlow(choice);
    } else {
        alert("choose again")
    };
});

boxTwo.addEventListener('click', () => {
    if ((gameBoard[1] != "x") && (gameBoard[1] != "o")) {
        choice = 1;
        gameFlow(choice);
    } else {
        alert("choose again")
    };
});

boxThree.addEventListener('click', () => {
    if ((gameBoard[2] != "x") && (gameBoard[2] != "o")) {
        choice = 2;
        gameFlow(choice);
    } else {
        alert("choose again")
    };
});

boxFour.addEventListener('click', () => {
    if ((gameBoard[3] != "x") && (gameBoard[3] != "o")) {
        choice = 3;
        gameFlow(choice);
    } else {
        alert("choose again")
    };
});

boxFive.addEventListener('click', () => {
    if ((gameBoard[4] != "x") && (gameBoard[4] != "o")) {
        choice = 4;
        gameFlow(choice);
    } else {
        alert("choose again")
    };
});

boxSix.addEventListener('click', () => {
    if ((gameBoard[5] != "x") && (gameBoard[5] != "o")) {
        choice = 5;
        gameFlow(choice);
    } else {
        alert("choose again")
    };
});

boxSeven.addEventListener('click', () => {
    if ((gameBoard[6] != "x") && (gameBoard[6] != "o")) {
        choice = 6;
        gameFlow(choice);
    } else {
        alert("choose again")
    };
});

boxEight.addEventListener('click', () => {
    if ((gameBoard[7] != "x") && (gameBoard[7] != "o")) {
        choice = 7;
        gameFlow(choice);
    } else {
        alert("choose again")
    };
});

boxNine.addEventListener('click', () => {
    if ((gameBoard[8] != "x") && (gameBoard[8] != "o")) {
        choice = 8;
        gameFlow(choice);
    } else {
        alert("choose again")
    };
});

newGame.addEventListener('click', () => {
    //player name information (dialogs and modals)
    resetGame();
    turn = 2;
    console.log(gameBoard);
});