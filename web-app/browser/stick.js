// creating constants for stick origin position and shot position
const STICK_ORIGIN = new Vector2(970, 11);
const STICK_SHOT_ORIGIN = new Vector2(950, 11);

// creating another function constructor
function Stick(position, onShoot){
    this.position = position;
    // working out rotation of stick
    this.rotation = 0;
    this.origin = STICK_ORIGIN.copy();
    this.power = 0;
    this.onShoot = onShoot;
    this.shot = false;
}

Stick.prototype.update = function(){

    if(Mouse.left.down){
        this.increasePower();
    } else if(this.power > 0){
        this.shoot();
    }

    // updating rotation so that cue points towards pointer
    this.updateRotation();

}

Stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
}


// computing angle of cue around ball via arctan of difference of x and y positions
Stick.prototype.updateRotation = function(){
    
    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x - this.position.x;
    
    this.rotation = Math.atan2(opposite, adjacent);
}

Stick.prototype.increasePower = function(){
    this.power += 100;
    this.origin.x += 5;
}

Stick.prototype.shoot = function(){

    this.onShoot(this.power, this.rotation);
    this.power = 0;
    this.origin = STICK_SHOT_ORIGIN.copy();
    this.shot = true;
}

Stick.prototype.reposition = function(position){

    this.position = position.copy();
    this.origin = STICK_ORIGIN.copy();
    this.shot = false;
}