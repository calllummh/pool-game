// defining function constructor
function Canvas2D(){
    this._canvas = document.getElementById("screen");
    this._canvasContext = this._canvas.getContext("2d");
}

// clearing canvas
Canvas2D.prototype.clear = function(){
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

// draw image method, creating origin of images (mouse centred)
Canvas2D.prototype.drawImage = function(image, position, origin, rotation = 0){

    if (!position){
        position = new Vector2();
    }

    if (!origin){
        origin = new Vector2();
    }
    this._canvasContext.save();
    this._canvasContext.translate(position.x, position.y);
    this._canvasContext.rotate(rotation);
    this._canvasContext.drawImage(image, -origin.x, -origin.y);
    this._canvasContext.restore();
}

// creating new object using function constructor
let Canvas = new Canvas2D();

// // just for testing images
// let image = new Image();
// image.src = "/web-app/assets/sprites/spr_background5.png";

// Canvas.drawImage(image, {x:0, y:0});

// setTimeout(() => {
//     Canvas.drawImage(image, {x:0, y:0});
//     // Canvas.clear();
// }, 1000);