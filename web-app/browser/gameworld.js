// creating constant
const DELTA = 1/100
// creating function constructor
function GameWorld(){

    // array of arguments of balls
    this.balls = [
        [new Vector2(1022,413),COLOUR.RED],//1
        [new Vector2(1056,393),COLOUR.RED],//2
        [new Vector2(1056,433),COLOUR.YELLOW],//3
        [new Vector2(1090,374),COLOUR.YELLOW],//4
        [new Vector2(1090,413),COLOUR.BLACK],//5
        [new Vector2(1090,452),COLOUR.RED],//6
        [new Vector2(1126,354),COLOUR.RED],//7
        [new Vector2(1126,393),COLOUR.YELLOW],//8
        [new Vector2(1126,433),COLOUR.RED],//9
        [new Vector2(1126,472),COLOUR.YELLOW],//10
        [new Vector2(1162,335),COLOUR.YELLOW],//11
        [new Vector2(1162,374),COLOUR.YELLOW],//12
        [new Vector2(1162,413),COLOUR.RED],//13
        [new Vector2(1162,452),COLOUR.YELLOW],//14
        [new Vector2(1162,491),COLOUR.RED],//15
        [new Vector2(413,413),COLOUR.WHITE]
    ].map(params => new Ball(params[0], params[1]))

    this.whiteBall = this.balls[this.balls.length - 1];
    this.stick = new Stick(
        new Vector2(413, 413),
        this.whiteBall.shoot.bind(this.whiteBall));

}
// sprite update method
GameWorld.prototype.update = function(){

    this.stick.update();
    
    for(let i=0; i < this.balls.length; i++){
        this.balls[i].update(DELTA);
    }

    // repositioning stick to new whiteball position
    if(!this.ballsMoving() && this.stick.shot){
        this.stick.reposition(this.whiteBall.position);
    }

}

// drawing objects
GameWorld.prototype.draw = function(){
    
    Canvas.drawImage(sprites.background, {x:0, y:0});

    for(let i=0; i < this.balls.length; i++){
        this.balls[i].draw();
    }

    this.stick.draw();
    
}

GameWorld.prototype.ballsMoving = function(){
    
    let ballsMoving = false;

    for( let i=0; i < this.balls) 
}