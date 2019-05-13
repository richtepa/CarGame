function Car(lane) {
    typeProb = Math.random();
    if (typeProb > 0.99) {
        this.type = "ambulance";
    } else if (typeProb > 0.97) {
        this.type = "truck";
    } else if (typeProb > 0.92) {
        this.type = "jeep";
    } else if (typeProb > 0.87) {
        this.type = "bus";
    } else if (typeProb > 0.77) {
        this.type = "taxi";
    } else if (typeProb > 0.67) {
        this.type = "convertible";
    } else if (typeProb > 0.47) {
        this.type = "van";
    } else {
        this.type = "car";
    }


    if (
        this.type == "car" ||
        this.type == "van" ||
        this.type == "jeep"
    ) {
        colorProb = Math.random();
        if (colorProb > 0.983) {
            this.color = "yellow";
        } else if (colorProb > 0.958) {
            this.color = "brown";
        } else if (colorProb > 0.871) {
            this.color = "red";
        } else if (colorProb > 0.771) {
            this.color = "blue";
        } else if (colorProb > 0.557) {
            this.color = "white";
        } else if (colorProb > 0.304) {
            this.color = "black";
        } else {
            this.color = "grey";
        }
    } else {
        this.color = "";
    }

    switch (this.type) {
        case "ambulance": //0.01
            this.boxX = 22.5;
            this.boxZ = 55;
            this.scale = 5;
            break;
        case "bus": //0.05
            this.boxX = 22.5;
            this.boxZ = 95;
            this.scale = 1;
            break;
        case "car": //0.47
            this.boxX = 22.5;
            this.boxZ = 45;
            this.scale = 1;
            break;
        case "convertible": //0.10
            this.boxX = 22.5;
            this.boxZ = 55;
            this.scale = 10;
            break;
        case "jeep": //0.05
            this.boxX = 22.5;
            this.boxZ = 55;
            this.scale = 1;
            break;
        case "taxi": //0.10
            this.boxX = 22.5;
            this.boxZ = 55;
            this.scale = 1;
            break;
        case "truck": //0.02
            this.boxX = 22.5;
            this.boxZ = 45;
            this.scale = 4;
            break;
        case "van": //0.20
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

    this.x = (lane * 100) - 200 + (Math.random() * 25) - 12.5;
    this.y = 0;
    this.z = -3500 + (Math.random() * 100);

    this.speed = 20 + Math.random();
    this.move = function () {
        this.z += movingspeed - this.speed;
    }
}
