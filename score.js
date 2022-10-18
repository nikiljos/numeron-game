// Iteration 5: Store the player score and display it on the game over screen
let score=sessionStorage.getItem("score")

document.getElementById("score-board").innerText=score;

document.getElementById("play-again-button").onclick=()=>{
    window.location="game.html"
}