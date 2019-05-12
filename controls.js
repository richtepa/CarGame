function keyPressed(){
    if(key == ' '){
        if(paused){
            resume();
        } else {
            pause();
        }
    }
    if(keyCode == LEFT_ARROW){
        left();
    }
    if(keyCode == RIGHT_ARROW){
        right();
    }
}

function mouseClicked(){
    if(
        mouseX < 110 &&
        mouseY < 120
    ){
        if(paused){
            resume();
        } else {
            pause();
        }
    }
}

function left(){
    player.x -= 100;
}

function right(){
    player.x += 100;
}

function specialAction(){
    
}