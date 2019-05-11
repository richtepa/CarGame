function Road(z){
    this.z = z;
    
    this.move = function (){
        this.z += movingspeed;
    }
}