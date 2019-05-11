function preload(){
    //models and textures
    textures.road = loadImage("3Dmodel/road/texture.png");
    models.ambulance = loadModel("3Dmodel/ambulance/ambulance.obj");
    textures.ambulance = loadImage("3Dmodel/ambulance/ambulance.png");
    models.bus = loadModel("3Dmodel/bus/bus.obj");
    textures.bus = loadImage("3Dmodel/bus/bus.png");
    models.car = loadModel("3Dmodel/car/car.obj");
    textures.car = loadImage("3Dmodel/car/car.png");
    models.convertible = loadModel("3Dmodel/convertible/convertible.obj");
    textures.convertible = loadImage("3Dmodel/convertible/convertible.png");
    models.jeep = loadModel("3Dmodel/jeep/jeep.obj");
    textures.jeep = loadImage("3Dmodel/jeep/jeep.png");
    models.taxi = loadModel("3Dmodel/taxi/taxi.obj");
    textures.taxi = loadImage("3Dmodel/taxi/taxi.png");
    models.truck = loadModel("3Dmodel/truck/truck.obj");
    textures.truck = loadImage("3Dmodel/truck/truck.png");
    models.van = loadModel("3Dmodel/van/van.obj");
    textures.van = loadImage("3Dmodel/van/van.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
    newGame();
}