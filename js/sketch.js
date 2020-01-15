
var xPos= 1;


function setup(){

    createCanvas (600, 400)

}

function draw() {

xPos = xPos * 1.01;


  background (240, 240)


    fill (0,0,255)
    rect (xPos, 0, 80, 80);

    console.log(xPos);
}
