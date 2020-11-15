const playerCounter = (() => {
    /* Putting the count here inside the module ensures it's created,
            and gives access to the functions inside of it. */
    let count = 0;
    const getNewID = () =>{
        return count++; //return the count, and increment it
    };
    return {getNewID};
})();

const playerFactory = (name) => {
    let playerID = playerCounter.getNewID();
    let setMarker = () => {
        if (playerID == 0){
            return "X";
        } 
        else if (playerID == 1){
            return "O";
        }
    };
    let marker = setMarker();

    return {name, playerID, marker};
}


const gameBoard = (() => {
// This is a module, it will automatically run when the script is loaded,
// creating and executing what is inside of it. any expored functions can be accessed outside of the scope.
    let board = []; // Create an object to store the moves on the board
    const container = document.querySelector("#root"); // grab the div element we want to add the board to
    //for (i=0; i<9; i++){ // Write 9 blank variables to be filled as board elements
    //    board.push(""); 
    //    console.log("Square created");
    //}
    //render the gameboard to the sreen
    const render = () => {
        let counter = 0;
        clear();
        for (let squares of board){  // loop through the div and create a tile for each of the elements
            const boardDiv = document.createElement("div"); //create a Div for a board tile
            boardDiv.className = "gridSquare"; //add the div to a class

            const boardText = document.createElement("p"); //add a text element to the board div
            boardText.textContent = board[counter]; //add placeholder text to the board
            boardText.dataset.id= counter; //add an ID to the div text
            boardText.className = "boardText";

            boardDiv.dataset.id = counter; // add an ID to the div
            counter++; // increment the counter
            
            boardDiv.appendChild(boardText); // add the text to the board div

            container.appendChild(boardDiv); //add the board div to the board container
        }
    };
    const newGame = () => {
        board = [];
        for (i=0; i<9; i++){ // Write 9 blank variables to be filled as board elements
            board.push(undefined); 
            console.log("Square created");
        }
    }
    const clear = () => {
        container.innerHTML = "";
    }
    const playPiece = (gridNumber, marker) => {
        if (board[gridNumber] === undefined){
            board[gridNumber] = marker;
            render();
        }
    }

    const getBoard = () => {
        console.log(board);
    }
    

    return {clear, newGame, render, playPiece, getBoard}

  
})();

const displayController =(() => {
    // Keep all the logic related to the enviroment here
    let players = [];

    for (i = 1; i<3; i++){ //gets the name for 2 players, adds to array.
        players.push(playerFactory(window.prompt("What is your name?", `player ${i}`)));    
    };
    gameBoard.newGame();

    
    let h = 0;
    for (v=0; v<= 9; v++){
        let marker = players[h].marker;
        let spot = window.prompt("What spot should we put the marker? 0-8");
        gameBoard.playPiece(spot, marker);
        if (h == 0 ) h = 1;
        else if (h == 1) h = 0;
        console.log(h);
    }
// now that we have the players made
    console.log(players);


})();


