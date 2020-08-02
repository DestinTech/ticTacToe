let players = [];
let playerCounter = 0;

const gameBoard = (() => {
// This is a module, it will automatically run when the script is loaded,
// creating and executing what is inside of it.
    let board = {};

})();
const Player = {
}

const playerFactory = (name) => {
    this.name = name;
    this.marker = (()=>{
        console.log( {playerCounter});
        if (playerCounter == 0){
            playerCounter =1;
            return "X";

        }
        if (playerCounter == 1){
            return "O";
        }
        else return `error: playerCounter = ${playerCounter}`;
    })();
    return {name, marker};
}

const displayController =(() => {
// Keep all the logic related to the enviroment here

    for (i = 1; i<3; i++){ //gets the name for 2 players, adds to array.
        players.push(playerFactory(window.prompt("What is your name?", `player ${i}`)));    
    }   
// now that we have the players made
    console.log(players);


})();
