const playerModel = (() => {//Here we should store the players, their ID's, and the methods to change that data.
//we need a player ID, name, and piece
    let players = [];    
    let playerCount = 0;
    const getNewID = () => {return playerCount++};  //return the count, and increment it
    const playerFactory = (name) => {
        let ID = getNewID();
        let getMarker  = () => {
            if (ID == 0){ return "X"}
            else if (ID == 1){ return "O"}
        };
        let marker = getMarker();

        return {name, ID, marker};
    }

    const createPlayer = (name) => { 
        newPlayer = playerFactory(name);
        players.push(newPlayer);
    }

    const clearPlayers = () => {
        players = [];
    }
    return {createPlayer, players, clearPlayers}
})();
const playerController = (() =>{
    const newGame = () => {
        playerModel.clearPlayers();
        for (let i=0; i <= 2; i++){ //initialize new players
            createPlayer(window.prompt("What is your name?"));
            i++;
        }
    }
    const createPlayer = (name) => {
        playerModel.createPlayer(name);
    }
    const players = () => playerModel.players;

    /*
    Here we have methods to update the player model. 
    The controller interacts with this, not the model.
    */
   return {createPlayer, players, newGame}
})();


const gameBoardModel = (() => {
// This is a module, it will automatically run when the script is loaded,
// creating and executing what is inside of it. any expored functions can be accessed outside of the scope.
    let board = []; // Create an object to store the moves on the board
    const container = document.querySelector("#root"); // grab the div element we want to add the board to render

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
    const play = (gridNumber, ID) => {
        if (ID == 0){ marker = "O"}
        if (ID == 1) {marker = "X"}
        if (board[gridNumber] === undefined){
            board[gridNumber] = marker;
            render();
        }
    }


    

    return {clear, newGame, render, play}
  
})();
const gameBoardController = (() => {
    let playerTurn = 0;
    //Here we have an interface to interact beween the gameBoardModel an the displayController
    let newGame = () => {
        gameBoardModel.newGame(); // clear the prev. game
        playerController.newGame();
        gameMain();
    }
    let play = (qu) => {
        gameBoardModel.play(qu, playerTurn);
        playerTurn = !playerTurn; 
    }
    let gameMain = () => {
        let win = false;
     //while no 3 are win
        while (win == false){
            play(window.prompt("What spot should we put the marker? 0-8"));
        }   
    }
    return {newGame, play}
})();


const displayController =(() => {
    gameBoardController.newGame();
})();