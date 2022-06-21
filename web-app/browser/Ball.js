// defining constant for ball origin and diameter
const BALL_ORIGIN = new Vector2(25, 25);
const BALL_DIAMETER = 38;

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

Ball.prototype.collideWith = function(ball){
    
    // finding normal vector
    const n = this.position.subtract(ball.position);

    // find distance
    const dist = n.length();

    if(dist > BALL_DIAMETER){
        return;
    }

    // finding minimum translation distance
    const mtd = n.mult((BALL_DIAMETER - dist) / dist);

    // push-pull balls apart
    this.position = this.position.add(mtd.mult(1/2));
    ball.position = ball.position.subtract(mtd.mult(1/2));

    // finding unit normal vector
    const un = n.mult(1/n.length());

    // finding unit tangent vector
    const ut = new Vector2(-un.y, un.x);

    // projecting velocities onto the unit normal and unit tangent vectors
    const v1n = un.dot(this.velocity);
    const v1t = ut.dot(this.velocity);
    const v2n = un.dot(ball.velocity);
    const v2t = ut.dot(ball.velocity);


    // find new normal velocities
    let v1nTag = v2n;
    let v2nTag = v1n;

    // convert scalar normal and tangential velocities into vectors
    v1nTag = un.mult(v1nTag);
    const v1tTag = ut.mult(v1t);
    v2nTag = un.mult(v2nTag);
    const v2tTag = ut.mult(v2t);

    // update velocities
    this.velocity = v1nTag.add(v1tTag);
    ball.velocity = v2nTag.add(v2tTag);
    
    this.moving = true;
    ball.moving = true;

}