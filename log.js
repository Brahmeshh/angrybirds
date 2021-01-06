class Log{
    constructor(x,y,height,angle){

        var log_options ={
        restitution: 0.7,
        friction:1.5,
        density:1.0,
        }

        this.body=Bodies.rectangle(x,y,20,height,log_options);
        this.width=20;
        this.height=height;

        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
        }
        display(){
            var angle = this.body.angle;
            var pos=this.body.position;
            rectMode(CENTER);
            push();
            translate(pos.x,pos.y)
            angleMode(RADIANS);
            rotate(angle);
            fill("brown");
            strokeWeight(4);
            stroke("yellow");
            rect(0,0,this.width,this.height);
            pop();
        }
    }