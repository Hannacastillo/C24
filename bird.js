class Bird{

    constructor(x,y){
    
     var  options={
            restitution:.5
          }
          
          this.width=50;
          this.height=50;
          this.body=Bodies.rectangle(x,y,50,50,options);
          World.add(myworld,this.body)
    
    
    }
    
    display(){
    push()
    fill("red")
    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS);
    rotate(this.body.angle)  
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    this.body.position.x=mouseX
    this.body.position.y=mouseY
    pop()
    
    
    }
    
    }