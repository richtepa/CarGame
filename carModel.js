 var carModelSketch = function (sketch) {
     rot = 90;

     sketch.preload = function () {
         playerModel = sketch.loadModel("/3Dmodel/ambulance/ambulance.obj");
         playerTexture = sketch.loadImage("/3Dmodel/ambulance/ambulance.webp");
     };

     sketch.setup = function () {
         sketch.createCanvas(sketch.windowWidth, sketch.windowHeight / 4, sketch.WEBGL);
         sketch.angleMode(sketch.DEGREES);
     };

     sketch.draw = function () {
         sketch.background(0, 0, 0);

         sketch.push();
         sketch.translate(0, sketch.windowHeight / 50, 0);
         sketch.rotateZ(180);
         sketch.rotateX(30);
         sketch.rotateY(rot);
         sketch.scale(15);
         sketch.texture(playerTexture);
         sketch.model(playerModel);
         sketch.pop();

         rot += 1;
         if (rot > 359) {
             rot = 0;
         }
     };

     sketch.mouseClicked = function () {

     };
 }

 var carModel = new p5(carModelSketch, document.getElementById("carModel"));
