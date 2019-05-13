function gameOver() {
    if (player.invulnerability <= 0) {
        main.noLoop();
        document.getElementById("newHighscore").classList.add("hidden");
        if (localStorage["highscore"] < score) {
            localStorage["highscore"] = score;
            document.getElementById("newHighscore").classList.remove("hidden");
        }
        gameOverScreen();
    }

}


function pause() {
    main.noLoop();
    if (localStorage["highscore"] < score) {
        localStorage["highscore"] = score;
    }
    pauseScreen();
}

function restart() {
    hideScreens();
    carModel.noLoop();
    document.getElementById("controlSurface").classList.remove("hidden");
    newGame();
    main.loop();
}

function resume() {
    if (!document.getElementById("gameOverScreen").classList.contains("hidden")) {
        player.x = 0;
        player.invulnerability = 2.5;
    }
    hideScreens();
    document.getElementById("controlSurface").classList.remove("hidden");
    main.loop();
}

function menu() {
    carModel.loop();
    menuScreen();
}

function settings() {
    //TODO
}

function changeCar() {
    //TODO
}



function newGame() {
    main.noLoop();
    cars = new Array();
    possibility = 0.75;
    spawnRate = 50;
    movingspeed = 40;
    score = 0;
    carCount = 0;
    if (localStorage["highscore"] == undefined) {
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


function preloadScreen() {
    //TODO
}

function pauseScreen() {
    hideScreens();
    document.getElementById("pScore").innerHTML = score + " (" + highscore + ")";
    document.getElementById("pauseScreen").classList.remove("hidden");
    main.clear();
}

function gameOverScreen() {
    hideScreens();
    document.getElementById("goScore").innerHTML = score + " (" + highscore + ")";
    document.getElementById("gameOverScreen").classList.remove("hidden");
    main.clear();
}

function menuScreen() {
    hideScreens();
    document.getElementById("menuScreen").classList.remove("hidden");
    main.clear();
}

function hideScreens() {
    document.getElementById("controlSurface").classList.add("hidden");
    document.getElementById("pauseScreen").classList.add("hidden");
    document.getElementById("gameOverScreen").classList.add("hidden");
    document.getElementById("menuScreen").classList.add("hidden");
}
