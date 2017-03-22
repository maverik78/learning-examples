function Bubble(x,y,d,s){
    this.x = x
    this.y = y
    this.d = d
    this.s= s



    this.show = function(){
        fill(0,50);
        stroke(255);
        ellipse(this.x,this.y,this.d,this.d)
    }
    this.move = function(){
        this.y = this.y+(random(this.s *-1,this.s))
  	   this.x = this.x + this.s
                         
    if (this.x + this.d/2 >width || this.x - this.d/2 < 0) {
        this.s = this.s *-1}
            

 }
}

    