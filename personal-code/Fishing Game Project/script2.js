var canvas, ctx, canvasBoat, ctxBoat, canvasFish, ctxFish;
var fishArray = [];
var fishArray1 = [];
var fishArray2 = [];

var frames = 0;


var fishImg = {}
var fishImg1 = {}
var fishImg2 = {}


function Fish(fishY, fishX) {
    this.type;
    this.x = canvas.width;
    this.minY = fishY;
    this.maxY = fishX;
    this.y = Math.random() * (this.maxY - this.minY) + this.minY;
    this.isCaught = function (x, y) {
        if (x > this.x && x < (this.x + 115) && y > this.y && y < (this.y + 115)) {
           
            console.log("Congrats u caught a fish " + this.x + " " + this.y);
        }
    }
}

Fish.prototype.fishDraw = function () {
    ctxFish.drawImage(fishImg.type, this.x, this.y, 115, 115);
}

Fish.prototype.fishDraw1 = function () {
    ctxFish.drawImage(fishImg1.type, this.x, this.y, 115, 115);
}

Fish.prototype.fishDraw2 = function () {
    ctxFish.drawImage(fishImg2.type, this.x, this.y, 115, 115);
}


window.onload = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvasBoat = document.getElementById('canvas-boat');
    ctxBoat = canvasBoat.getContext('2d');
    canvasFish = document.getElementById('canvas-fish');
    ctxFish = canvasFish.getContext('2d');

    var bgImg = new Image();
    imgScale = 640 / 480;
    bgImg.onload = function () {
        ctx.drawImage(bgImg, 0, 0, 748 * imgScale, 748);
    }
    bgImg.src = './images/bg.jpg';

    var boat = new Image();
    boat.onload = function () {
        ctxBoat.drawImage(boat, 700, 160, 300, 150);
    }
    boat.src = './images/boat.png';

    fishImg.type = new Image();
    fishImg.type.src = './images/1-point-fish.png';

    fishImg1.type = new Image();
    fishImg1.type.src = './images/3-point-fish.png';

    fishImg2.type = new Image();
    fishImg2.type.src = './images/5-point-fish.png';

    window.requestAnimationFrame(animate);
    //window.onmousedown = fishingHook;

    //report the mouse position on click
    canvasFish.addEventListener("click", function (evt) {

        var mousePos = getMousePos(canvasFish, evt);
        ctx.beginPath();
        ctx.moveTo(713, 165);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
        catchFish(mousePos.x, mousePos.y);


        setTimeout(function () {
            ctx.clearRect(0, 0, canvasFish.width, canvasFish.height);
            ctx.drawImage(bgImg, 0, 0, 748 * imgScale, 748);
        }, 500);
    }, false);
   
};

var animate = function () {
    frames++;
    ctxFish.clearRect(0, 0, canvas.width, canvas.height);

    if (frames % 40 === 0 && fishArray.length < 5) {

        fishArray.push(new Fish(430, 540));
    }
    for (var i = 0; i < fishArray.length; i++) {

        if (fishArray[i].x < -115) {
            // recylce fish
            fishArray[i].x = canvas.width +115;//---changing here
        }
        else {
            fishArray[i].fishDraw();
        }

        fishArray[i].x -= 4;

    }

    if (frames % 90 === 0) {
        fishArray1.push(new Fish(470, 600));
    }

    for (var i = 0; i < fishArray1.length; i++) {
        fishArray1[i].fishDraw1();
        fishArray1[i].x -= 7;
    }
    if (frames % 100 === 0) {
        fishArray2.push(new Fish(470, 600));
    }
    for (var i = 0; i < fishArray2.length; i++) {
        fishArray2[i].fishDraw2();
        fishArray2[i].x -= 10;
    }

    window.requestAnimationFrame(animate);
}

//Get Mouse Position


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    var result = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };

    console.log(result)
    return result

}

function catchFish(x, y) {
    fishArray.forEach(fish => {
        fish.isCaught(x,y);
    })

}
    // var caughtFish = [];
    // for (var i = 0; i < fishArray.length; i++) {
    //     var fish = fishArray[i];
    //     //check to see if this coin has been clicked...
    //     if (x > fish.x && x < (fish.x + 115)  && y > fish.y && y < (fish.y+ 115)) {
    //       //ths coin will disappear because it is not inserted into the new array...
    //       console.log("Congrats u caught a fish " + fish.x + " " + fish.y);
    //     } else {
    //         caughtFish.push(fish);
    //     }
