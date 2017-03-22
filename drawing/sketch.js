
var x = 200;
var y = 200;
var bubbles = [];

function setup() {
	createCanvas(600, 400);
	
}
function mouseDragged(){
    bubbles.push(new Bubble(mouseX, mouseY,10 ,3));
}

function draw() {
	background(125);
	
  	for(var i = 0 ;i < bubbles.length ; i++){
      bubbles[i].show();
      bubbles[i].move();
}
}

function keyPressed() {
     bubbles.splice(0,1);
    return false
 }
    //console.log (bubbles);
    //console.log (keyCode)
    //y = y+(random(-5,5));
  	//x = x+(random(-5,5));

