//creating game object with three methods
function Game(){

}

Game.prototype.init() = function(){
    this.gameWorld = new this.gameWorld();

}

Game.prototype.start() = function(){
    poolGame.init();

    poolGame.mainloop()
}

Game.prototype.mainLoop() = function(){
    
    Canvas.clear();
    poolGame.gameWorld.update();
    poolGame.gameWorld.draw();

    requestAnimationFrame(poolGame.mainloop);
}

let poolGame = new Game();