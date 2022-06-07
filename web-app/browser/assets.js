//creating empty objects and variables
let sprites = {};
let assetsStillLoading = 0

//declaring function which activates callback function when assets are loaded
function assetsLoadingLoop(callback){
    if (assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this,callback));
    } else{
        callback();
    }
}


function loadAssets(callback){
    function loadSprite(fileName){
        assetsStillLoading++;
        let spriteImage = new Image():
        spriteImage.spr = "./assets/sprites/" + fileName;
        spriteImage.onload = function(){
            assetsStillLoading--;
        }

        return spriteImage;
    }
    sprites.background = loadSprite('spr_background.png')
    sprites.stick = loadSprite('spr_stick.png')

    assetsLoadingLoop(callback);
}
