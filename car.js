function Car(type, lane){
    this.type = type;
    switch(this.type){
        case "ambulance":
            this.boxX = 22.5;
            this.boxZ = 55;
            this.scale = 5;
            break;
        case "bus":
            this.boxX = 22.5;
            this.boxZ = 95;
            this.scale = 1;
            break;
        case "car":
            this.boxX = 22.5;
            this.boxZ = 45;
            this.scale = 1;
            break;
        case "convertible":
            this.boxX = 22.5;
            this.boxZ = 55;
            this.scale = 10;
            break;
        case "jeep":
            this.boxX = 22.5;
            this.boxZ = 55;
            this.scale = 1;
            break;
        case "taxi":
            this.boxX = 22.5;
            this.boxZ = 55;
            this.scale = 1;
            break;
        case "truck":
            this.boxX = 22.5;
            this.boxZ = 45;
            this.scale = 4;
            break;
        case "van":
            this.boxX = 22.5;
            this.boxZ = 45;
            this.scale = 1;
            break;
        default:
            this.boxX = 22.5;
            this.boxZ = 45;
            this.scale = 1;
            break;
    }
    
    this.x = (lane * 100) - 200 + (Math.random()*25) - 12.5;
    this.y = 0;
    this.z = -3500 + (Math.random()*100);
    
    this.speed = 10 + Math.random()*0.5;
    this.move = function (){
        this.z += this.speed;
        this.speed += movingacceleration;
    }
}