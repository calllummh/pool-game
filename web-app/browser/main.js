import R from "./common/ramda.js";
import Json_rpc from "./Json_rpc.js";

function Canvas2D(){
    this._canvas = document.getElementById('screen'); //fetching canvas from html
    this._canvasContext = this._canvas.getContext('2d'); //getting canvas context from html

}

//clearing canvas
Canvas2D.prototype.clear = function(){
    this._canvasContext.clearRect(0,0,this._canvas.width, this._canvas.height);
}

//image on canvas
Canvas2D.prototype.drawImage = function(image,position){
    this._canvasContext.drawImage(image,position.x,position.y) 
}

let Canvas = new Canvas2D();
// //just for testing
// let image = new Image();
// image.src = "./assets/sprites/spr_background.png"§

// //making callback function to run test (setting timeout to 1s)
// setTimeout(()=>{
//     Canvas.drawImage(image,{x:0,y:0});
// }, 1000);


//all event listeners and server-side code (CHECK EXAMPLE)