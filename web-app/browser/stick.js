//function constructor for stick
function stick(){
    this.position= {x:0,y:400};
}

stick.prototype.update = function(){


    //testing
    this.position.x++;
}

stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position);

}