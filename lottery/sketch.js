var prob = 5000

function setup(){
    createCanvas(windowWidth,windowHeight)
    
}

function draw(){
    var r =floor(random(prob))
   
if (r == 1){
    console.log("you won")
    
else(){
    console.log("you lost")
}
}
}