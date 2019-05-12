function draw(){
    if(!paused){
        //spawning
        if(frameCount % 30 == 0 && Math.random() < possibility){
            r = Math.random();
            carAmount = Math.floor(r*5);
            freeLanes = new Array(0,1,2,3,4);
            for(i=0; i<carAmount; i++){
                l = Math.floor(Math.random()*freeLanes.length);
                cars.push(new Car(freeLanes[l]));
                freeLanes.splice(l, 1);
            }
        }
        
        
        //basic canvas
        noStroke();
        background(0, 102, 0);
        
        //score
        if(frameCount % 10 == 0){
            score ++;
            if(score > highscore){
                highscore = score;
            }
        }
        movingspeed += movingacceleration;
        
        push();
        fill(255);
        textFont(f, 100);
        textSize(windowWidth/20);
        textAlign(RIGHT);
        text(score + " (" + highscore + ")", windowWidth/2 - 30, -windowHeight/2 + 70);
        
        rect(-windowWidth/2 + 30, -windowHeight/2 + 30, 20, 60);
        rect(-windowWidth/2 + 60, -windowHeight/2 + 30, 20, 60);
        pop();
        
        
        
        rotateX(rotation);
        
        //surrounding
        for(i=0; i<roads.length; i++){
            road = roads[i];
            if(road.z > windowHeight/4*3){
                roads.splice(i, 1);
                roads.push(new Road(roads[roads.length-1].z - 500));
                i--;
            }
            
            push();
            translate(0, 0, -road.z);
            rotateY(90);
            texture(textures.road);
            box(520, 10, 500);
            pop();
            
            road.move();
        }
        


        //player
        push();
        translate(player.x, player.y, -player.z);
        if(player.invulnerability > 0){
            player.invulnerability -= 1/60;
            fill(0, 0, 255, 255*player.invulnerability/2.5);
            sphere(100);
        }
        scale(5);
        texture(textures.ambulance);
        model(models.ambulance);
        pop();
        
        if(player.x < -300){
            player.x = -300;
        }
        if(player.x < -200){
            gameOver();
        }
        if(player.x > 300){
            player.x = 300;
        }
        if(player.x > 200){
            gameOver();
        }

        
        //cars
        for(i=0; i<cars.length; i++){
            car = cars[i];
            if(car.z > windowHeight/4*3){
                cars.splice(i, 1);
                i--;
            } else {
                push();
                translate(car.x, car.y, -car.z);
                scale(car.scale);
                if(car.color != ""){
                    texture(textures.car[car.color]);    
                } else {
                    texture(textures[car.type]);
                }
                model(models[car.type]);
                pop();

                if(
                    abs(car.x - player.x) < car.boxX + player.boxX &&
                    abs(car.z - player.z) < car.boxZ + player.boxZ
                  ){
                    console.log("Kollision");
                    gameOver();
                }

                car.move();
            }
        }
        
    }
}