function draw(){
    if(!paused){
        //spawning
        if(frameCount % 30 == 0 && Math.random() < possibility){
            r = Math.random();
            carAmount = Math.floor(r*5);
            freeLanes = new Array(0,1,2,3,4);
            for(i=0; i<carAmount; i++){
                l = Math.floor(Math.random()*freeLanes.length);
                
                /*
                c = Math.random();
                
                if(c > 0.9){
                    type = "jeep";
                } else if(c > 0.7){
                    type = "convertible";
                } else {
                    type = "car";
                }
                */
                
                
                carTypes = new Array("ambulance", "bus", "car", "convertible", "jeep", "taxi", "truck", "van");
                type = carTypes[carCount];
                carCount ++;
                if(carCount > carTypes.length - 1){
                    carCount = 0;
                }
                
                
                cars.push(new Car(type, freeLanes[l]));
                freeLanes.splice(l, 1);
            }
        }
        
        
        //basic canvas
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
        fill(128);
        textFont(f, 100);
        textSize(50);
        textAlign(RIGHT);
        text(score + "(" + highscore + ")", 450, -900);
        pop();
        
        
        
        rotateX(rotation);
        
        //surrounding
        for(i=0; i<roads.length; i++){
            road = roads[i];
            if(road.z > 1500){
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
        scale(5);
        texture(textures.ambulance);
        model(models.ambulance);
        pop();

        
        //cars
        for(i=0; i<cars.length; i++){
            car = cars[i];
            if(car.z > 1200){
                cars.splice(i, 1);
                i--;
            } else {
                push();
                translate(car.x, car.y, -car.z);
                scale(car.scale);
                texture(textures[car.type]);
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