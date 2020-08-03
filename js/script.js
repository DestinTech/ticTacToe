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
    let board = [];
    const container = document.querySelector("#root");
    for (i=0; i<9; i++){
        board.push("");
        console.log("Square created");
    }
        //render the gameboard to the sreen
    render = (() => {
        let counter = 0;
        for (let squares of board){
            const boardDiv = document.createElement("div");
            boardDiv.className = "gridSquare";

            const boardText = document.createElement("p");
            boardText.textContent = "X";
            boardText.dataset.id= counter;
            boardText.className = "boardText";
            boardDiv.dataset.id = counter;

            counter++;
            
            boardDiv.appendChild(boardText);

            container.appendChild(boardDiv);
        }
    })();
    clear = () =>{


    };

})();

const displayController =(() => {
    // Keep all the logic related to the enviroment here
    let players = [];

    for (i = 1; i<3; i++){ //gets the name for 2 players, adds to array.
        players.push(playerFactory(window.prompt("What is your name?", `player ${i}`)));    
    };
// now that we have the players made
    console.log(players);


})();


