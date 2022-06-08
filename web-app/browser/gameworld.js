//function construtor containing all physical objects of game - responsible to update for every frame of game
function gameWorld(){
    this.stick = new Stick();

}

gameWorld.prototype.update(){

    this.stick.update();

}

gameWorld.prototype.draw(){

    Canvas.drawimage(sprites.background, {x:0, y:0});

    this.stick.draw
}