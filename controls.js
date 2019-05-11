function keyPressed(){
    if(key == ' '){
        paused = !paused;
    }
    if(keyCode == LEFT_ARROW){
        left();
    }
    if(keyCode == RIGHT_ARROW){
        right();
    }
}

function mouseClicked(){
    if(paused){
        location.reload();
    } else {
        if(mouseX < windowWidth/2){
            left();
        }
        if(mouseX > windowWidth/2){
            right();
        }
    }
}

function left(){
    player.x -= 100;
    if(player.x < -200){
        gameOver();
    }
}

function right(){
    player.x += 100;
    if(player.x > 200){
        gameOver();
    }
}