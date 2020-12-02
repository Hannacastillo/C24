class Log{
    constructor(x,y,h,angle){
    
     var  options={
            restitution:.5,
            friction:1

          }
          
          this.width=20;
          this.height=h;
          this.body=Bodies.rectangle(x,y,20,h,options);
          Matter.Body.setAngle(this.body,angle);
          World.add(myworld,this.body);

    
    
    }
    
    display(){
    push()
    fill("yellow")
    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS);
    rotate(this.body.angle)  
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop()
    
    
    }
    
    }