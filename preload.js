function preload(){
    //models and textures
    textures.road = loadImage("/3Dmodel/road/texture.webp");
    models.ambulance = loadModel("/3Dmodel/ambulance/ambulance.obj");
    textures.ambulance = loadImage("/3Dmodel/ambulance/ambulance.webp");
    models.bus = loadModel("/3Dmodel/bus/bus.obj");
    textures.bus = loadImage("/3Dmodel/bus/bus.png");
    
    models.car = loadModel("/3Dmodel/car/car.obj");
    models.van = loadModel("/3Dmodel/van/van.obj");
    models.jeep = loadModel("/3Dmodel/jeep/jeep.obj");
    
    textures.car = new Object();
    textures.car.yellow = loadImage("/3Dmodel/TEXTURES/car-yellow.png");
    textures.car.brown = loadImage("/3Dmodel/TEXTURES/car-brown.png");
    textures.car.red = loadImage("/3Dmodel/TEXTURES/car-red.png");
    textures.car.blue = loadImage("/3Dmodel/TEXTURES/car-blue.png");
    textures.car.white = loadImage("/3Dmodel/TEXTURES/car-white.png");
    textures.car.black = loadImage("/3Dmodel/TEXTURES/car-black.png");
    textures.car.grey = loadImage("/3Dmodel/TEXTURES/car-grey.png");
    
    models.convertible = loadModel("/3Dmodel/convertible/convertible.obj");
    textures.convertible = loadImage("/3Dmodel/convertible/convertible.webp");
    models.taxi = loadModel("/3Dmodel/taxi/taxi.obj");
    textures.taxi = loadImage("/3Dmodel/taxi/taxi.png");
    models.truck = loadModel("/3Dmodel/truck/truck.obj");
    textures.truck = loadImage("/3Dmodel/truck/truck.webp");
    
    //font
    f = loadFont(
        "/SourceCodePro-Bold.otf"
    );
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
}