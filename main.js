var mainSketch = function (sketch) {
    sketch.noLoop();

    sketch.preload = function () {
        //models and textures
        textures.road = sketch.loadImage("/3Dmodel/road/texture.webp");
        models.ambulance = sketch.loadModel("/3Dmodel/ambulance/ambulance.obj");
        textures.ambulance = sketch.loadImage("/3Dmodel/ambulance/ambulance.webp");
        models.bus = sketch.loadModel("/3Dmodel/bus/bus.obj");
        textures.bus = sketch.loadImage("/3Dmodel/bus/bus.png");

        models.car = sketch.loadModel("/3Dmodel/car/car.obj");
        models.van = sketch.loadModel("/3Dmodel/van/van.obj");
        models.jeep = sketch.loadModel("/3Dmodel/jeep/jeep.obj");

        textures.car = new Object();
        textures.car.yellow = sketch.loadImage("/3Dmodel/TEXTURES/car-yellow.png");
        textures.car.brown = sketch.loadImage("/3Dmodel/TEXTURES/car-brown.png");
        textures.car.red = sketch.loadImage("/3Dmodel/TEXTURES/car-red.png");
        textures.car.blue = sketch.loadImage("/3Dmodel/TEXTURES/car-blue.png");
        textures.car.white = sketch.loadImage("/3Dmodel/TEXTURES/car-white.png");
        textures.car.black = sketch.loadImage("/3Dmodel/TEXTURES/car-black.png");
        textures.car.grey = sketch.loadImage("/3Dmodel/TEXTURES/car-grey.png");

        models.convertible = sketch.loadModel("/3Dmodel/convertible/convertible.obj");
        textures.convertible = sketch.loadImage("/3Dmodel/convertible/convertible.webp");
        models.taxi = sketch.loadModel("/3Dmodel/taxi/taxi.obj");
        textures.taxi = sketch.loadImage("/3Dmodel/taxi/taxi.png");
        models.truck = sketch.loadModel("/3Dmodel/truck/truck.obj");
        textures.truck = sketch.loadImage("/3Dmodel/truck/truck.webp");

        //font
        f = sketch.loadFont(
            "/SourceCodePro-Bold.otf"
        );
    };

    sketch.setup = function () {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
        sketch.angleMode(sketch.DEGREES);
    };

    sketch.draw = function () {
        //spawning
        if (sketch.frameCount % spawnRate == 0 && Math.random() < possibility) {
            r = (1 + Math.random()) * 1.1;
            carAmount = Math.floor(r * r);
            freeLanes = new Array(0, 1, 2, 3, 4);
            for (i = 0; i < carAmount; i++) {
                l = Math.floor(Math.random() * freeLanes.length);
                cars.push(new Car(freeLanes[l]));
                freeLanes.splice(l, 1);
            }
        }


        //basic canvas
        sketch.noStroke();
        sketch.background(0, 102, 0);

        //score
        if (sketch.frameCount % 10 == 0) {
            score++;
            if (score > highscore) {
                highscore = score;
            }
        }
        movingspeed += movingacceleration;
        if (movingspeed < 4000) {
            spawnRate = Math.floor(4000 / movingspeed);
        } else {
            spawnRate = 4000;
        }


        sketch.push();
        sketch.fill(255);
        sketch.textFont(f, 100);
        sketch.textSize(sketch.windowWidth / 20);
        sketch.textAlign(sketch.RIGHT);
        sketch.text(score + " (" + highscore + ")", sketch.windowWidth / 2 - 30, -sketch.windowHeight / 2 + 70);

        sketch.rect(-sketch.windowWidth / 2 + 30, -sketch.windowHeight / 2 + 30, 20, 60);
        sketch.rect(-sketch.windowWidth / 2 + 60, -sketch.windowHeight / 2 + 30, 20, 60);
        sketch.pop();



        sketch.rotateX(rotation);

        //surrounding
        for (i = 0; i < roads.length; i++) {
            road = roads[i];
            if (road.z > sketch.windowHeight / 4 * 3) {
                roads.splice(i, 1);
                roads.push(new Road(roads[roads.length - 1].z - 500));
                i--;
            }

            sketch.push();
            sketch.translate(0, 0, -road.z);
            sketch.rotateY(90);
            sketch.texture(textures.road);
            sketch.box(520, 10, 500);
            sketch.pop();

            road.move();
        }



        //player
        sketch.push();
        if (player.x != player.aim) {
            if (Math.abs(player.x - player.aim) < movingfactor) {
                player.x = player.aim;
            } else {
                if (player.x > player.aim) {
                    player.x -= movingfactor;
                } else {
                    player.x += movingfactor;
                }
            }
        }
        sketch.translate(player.x, player.y, -player.z);
        if (player.invulnerability > 0) {
            player.invulnerability -= 1 / 60;
            sketch.fill(0, 0, 255, 255 * player.invulnerability / 2.5);
            sketch.sphere(100);
        }
        sketch.scale(5);
        sketch.texture(textures.ambulance);
        sketch.model(models.ambulance);
        sketch.pop();

        if (player.x < -300) {
            player.x = -300;
        }
        if (player.x < -200) {
            gameOver();
        }
        if (player.x > 300) {
            player.x = 300;
        }
        if (player.x > 200) {
            gameOver();
        }


        //cars
        for (i = 0; i < cars.length; i++) {
            car = cars[i];
            if (car.z > sketch.windowHeight / 4 * 3) {
                cars.splice(i, 1);
                i--;
            } else {
                sketch.push();
                sketch.translate(car.x, car.y, -car.z);
                sketch.scale(car.scale);
                if (car.color != "") {
                    sketch.texture(textures.car[car.color]);
                } else {
                    sketch.texture(textures[car.type]);
                }
                sketch.model(models[car.type]);
                sketch.pop();

                if (
                    Math.abs(car.x - player.x) < car.boxX + player.boxX &&
                    Math.abs(car.z - player.z) < car.boxZ + player.boxZ
                ) {
                    gameOver();
                }

                car.move();
            }
        }


    };

    sketch.mouseClicked = function () {
        if (
            sketch.mouseX < 110 &&
            sketch.mouseY < 120
        ) {
            if (!document.getElementById("pauseScreen").classList.contains("hidden")) {
                resume();
            } else {
                pause();
            }
        }
    };
}

var main = new p5(mainSketch, document.getElementById("game"));
main.frameRate(30);
