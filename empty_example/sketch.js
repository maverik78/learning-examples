var slide=0
var slider
var buttonPush;
function setup(){
    buttonPush = createButton("push")
    createP(slide)
    slider = createSlider(0,50,25)
    createCanvas(640,360);
    createP("does this work");
    
}

function mousePressed(){
    //createP("does this work");
    
     slide= slider.value()
}

function keyPressed(){
    createP(slide)
}
    function draw(){
    rect(100,200,75,150);
    ellipse(135,200,40,40);
    line(175,200,200,275)
    
   

}