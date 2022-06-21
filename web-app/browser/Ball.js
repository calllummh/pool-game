// defining constant for ball origin
const BALL_ORIGIN = new Vector2(25, 25);

// defining function constructor
function Ball(position, colour){
    this.position = position;
    this.velocity = new Vector2();
    this.moving = false;
    this.sprite = getBallSpriteByColour(colour);
}

Ball.prototype.update = function(delta){
    this.position.addTo(this.velocity.mult(delta));

    this.velocity = this.velocity.mult(0.98);

    if(this.velocity.length() < 5){
        this.velocity = new Vector2();
        this.moving = false;
    }
}

Ball.prototype.draw = function(){
    Canvas.drawImage(this.sprite, this.position, BALL_ORIGIN);
}

Ball.prototype.shoot = function(power, rotation){
    // calculating x and y components of velocity
    this.velocity = new Vector2(power * Math.cos(rotation), power * Math.sin(rotation));
    this.moving = true;
}