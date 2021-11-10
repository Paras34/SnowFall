class Snowflake{
    constructor(x,y){
      
        var options = {
            frictionAir : random(0.002,0.03)
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = random(70,20);
        this.height = this.width;
        this.image = loadImage("snow4.webp");
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        if(pos.y > 390){
            Matter.Body.setPosition(this.body,{x : random(0,800), y : random(-100,-200)});
        }
    }
}