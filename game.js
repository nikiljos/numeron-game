// Iteration 2: Generate 2 random number and display it on the screen
let num1=25
let num2=32
let seconds = 5;
let score=0;
setRandom()
function setRandom(){
    seconds = 5;
    document.getElementById("timer").innerText = seconds;
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    document.getElementById("number1").innerText=num1;
    document.getElementById("number2").innerText = num2;
}

// Iteration 3: Make the options button functional

document.getElementById("buttons").onclick=e=>{
    let symbol
    switch (e.target.id) {
        case "greater-than":
            symbol = ">";
            break;
        case "lesser-than":
            symbol = "<";
            break;
        case "equal-to":
            symbol = "==";
            break;
        default:
            return;
    }
    let res=eval(`${num1} ${symbol} ${num2}`)
    console.log(res)
    if(res){
        score++;
        setRandom();
    }
    else{
        gameOver()        
    }  
}

// Iteration 4: Build a timer for the game
let countDown = setInterval(() => {
    document.getElementById("timer").innerText = seconds;
    if(seconds>0){
        seconds--;
    }else{
        gameOver()
    }
}, 1000);

function gameOver(){
    sessionStorage.setItem("score", score);
    window.location = "gameover.html";
}
