//creating empty objects and variables
let sprites = {};
let assetsStillLoading = 0;

//function to validate that all images are loading using callback function
function assetsLoadingLoop(callback){

    if (assetsStillLoading){
        // enters loop again if assets still loading
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    } else{
        callback();
    }

}

//declaring function which activates callback function when assets are loaded
function loadAssets(callback){

    //function loading assets, creating image from different sprites, using path 
    function loadSprite(fileName){
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "/web-app/assets/sprites/" + fileName;
        
        spriteImage.onload = function(){
            assetsStillLoading--;
        }

        //returning image
        return spriteImage;
    }

    //loading the background and stick
    sprites.background = loadSprite("spr_background5.png");
    sprites.stick = loadSprite("spr_stick.png");
    sprites.whiteBall = loadSprite("spr_ball2.png");
    sprites.redBall = loadSprite("spr_redBall2.png");
    sprites.yellowBall = loadSprite("spr_yellowBall2.png");
    sprites.blackBall = loadSprite("spr_blackBall2.png");


    assetsLoadingLoop(callback);
}

function getBallSpriteByColour(colour){

    switch(colour){

        case COLOUR.RED:
            return sprites.redBall;
        case COLOUR.YELLOW:
            return sprites.yellowBall;
        case COLOUR.BLACK:
            return sprites.blackBall;
        case COLOUR.WHITE:
            return sprites.whiteBall;
    }
}