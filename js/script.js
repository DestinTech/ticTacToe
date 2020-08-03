const playerCounter = (() => {
    let count = 0;
        /* Putting the count here inside the module ensures it's created,
            and gives access to the functions inside of it. 
    */
    const getNewID = () =>{
        return count++; //return the count, and increment it
    };
    return {getNewID};
})();
/*
class Player{    
    //creates players and sets ID's and markers
    constructor(name){

        this.playerID = playerCounter.getNewID();   //gets a unique player ID        
        this.name = name;
        this.marker = this.getMarker(); 
        }

    getMarker = () => {
            if (this.playerID == 0){
                return "X";
            } 
            else if (this.playerID == 1){
                return "O";
            }
    
    }
}
*/

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
    let board = {};

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
