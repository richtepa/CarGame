document.addEventListener("keydown", function (e) {
    if (e.keyCode == "37") {
        left();
    }
    if (e.keyCode == "39") {
        right();
    }
    if (e.keyCode == "32") {
        if (!document.getElementById("pauseScreen").classList.contains("hidden")) {
            resume();
        } else {
            pause();
        }
    }
});

function left() {
    player.aim -= 100;
}

function right() {
    player.aim += 100;
}

function specialAction() {

}
