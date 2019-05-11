function gameOver(){
    if(localStorage["highscore"] < score){
        localStorage["highscore"] = score;
    }
    console.log("GameOver!");
    paused = true;
}


function newGame(){
    cars = new Array();
    paused = false;
    possibility = 0.5;
    movingspeed = 20;
    score = 0;
    carCount = 0;
    
    
    if(localStorage["highscore"] == undefined){
        localStorage["highscore"] = 0;
    }
    highscore = localStorage["highscore"];
    
    
    
    player = new Player();
    
    //first road
    roads = new Array();
    roads.push(new Road(1000));
    roads.push(new Road(500));
    roads.push(new Road(0));
    roads.push(new Road(-500));
    roads.push(new Road(-1000));
    roads.push(new Road(-1500));
    roads.push(new Road(-2000));
    roads.push(new Road(-2500));
    roads.push(new Road(-3000));
    roads.push(new Road(-3500));
}