window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var canvasBoat = document.getElementById('canvas-boat');
    var ctxBoat = canvasBoat.getContext('2d');
    var canvasFish = document.getElementById('canvas-fish');
    var ctxFish = canvasFish.getContext('2d');
    var frames = 0;
    var fish = [];
    

    var bgImg = new Image();
    imgScale = 640/480;
    bgImg.src = './images/bg.jpg';
       bgImg.onload = function() {
        ctx.drawImage(bgImg, 0, 0,748*imgScale,748);
    }

    var boat = new Image();
    boat.src = './images/boat.png';
    boat.onload = function(){
        ctxBoat.drawImage(boat, 700, 160, 300, 150);
    }

//     var fish1Array = [];
//     animateFish(fish1Array);

    
//     function animateFish(fish1Array) {
//     var fish1 = new Image();
//     fish1.src = './images/1-point-fish.png';
//     fish1Array.push(fish1);
//     var x = canvas.width;
//     var minY = 430;
//     var maxY = 540;
    
    
//    console.log(fish1);
    
//     fish1.onload = animate;
    
//     var y = Math.random()*(maxY - minY)+minY;
//     var startNew = Math.random()* (x+115);
    
//     function animate() {
//         for(i=0; i<fish1Array.length; i++)
//         ctxFish.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
//         ctxFish.drawImage(fish1, x, y);   
            
//         x -= 4;
//        // console.log(fish1Array.length);
//         if (x<startNew && fish1Array.length<11) {
//             animateFish(fish1Array);
//             startNew = 0;
//         }
//         if (x > -115) requestAnimationFrame(animate)   // loop
//     }
//     }
    var fish2 = new Image();
    fish2.src = './images/3-point-fish.png';
    fish2.onload = function(){
        ctxFish.drawImage(fish2, 700, 470, 115, 115);
    }

    var fish3 = new Image();
    fish3.src = './images/5-point-fish.png';
    fish3.onload = function(){
        ctxFish.drawImage(fish3, 600, 540, 115, 115);
    }

    var fish4 = new Image();
    fish4.src = './images/10-point-fish.png';
    fish4.onload = function(){
        ctxFish.drawImage(fish4, 400, 590, 115, 115);
    }

    var fishBonus = new Image();
    fishBonus.src = './images/shark-bonus.png';
    fishBonus.onload = function(){
        ctxFish.drawImage(fishBonus, 600, 635, 167, 115);
    }

    var eel = new Image();
    eel.src = './images/eel.png';
    eel.onload = function(){
        ctxFish.drawImage(eel, 300, 550, 90, 90);
    }

    var octopus = new Image();
    octopus.src = './images/octopus.png';
    octopus.onload = function(){
        ctxFish.drawImage(octopus, 820, 470, 90, 90);
    }

    
    };
    



// var w = canvas.width;
// var h = canvas.height;
// var mouseStart = false;
// var hookStart = {x:0,y:0};
// var hookEnd = {x:0,y:0};




//--------Start Game Function
//-------check fish boundary
//-------check boat boundary and turn its face
//--------Move Fish Function
//function animateFish1() {}
    
//--------Move Boat Function
//--------Move Fishing Rod horizontally function
//--------Move Fishing Rod vertically function
//--------collision /catch fish
//--------check caught fish point 
//--------End Game Function
