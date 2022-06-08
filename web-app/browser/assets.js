//creating empty objects and variables
let sprites = {};
let assetsStillLoading = 0

//function to validate that all images are loading
function assetsLoadingLoop(callback){

    if (assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this,callback));
    } else{
        callback();
    }

}

//declaring function which activates callback function when assets are loaded
function loadAssets(callback){

    //function loading assets, creating image from different sprites (using path) 
    function loadSprite(fileName){
        assetsStillLoading++;

        let spriteImage = new Image():
        spriteImage.spr = "./assets/sprites/" + fileName;
        
        spriteImage.onload = function(){
            assetsStillLoading--;
        }

        //returning image
        return spriteImage;
    }
    
    //loading the background and stick
    sprites.background = loadSprite('spr_background.png')
    sprites.stick = loadSprite('spr_stick.png')

    assetsLoadingLoop(callback);
}
