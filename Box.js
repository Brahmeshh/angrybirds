class Box{
    constructor(x,y,width,height){
        var box_options ={
        restitution: 0.7,
        friction:0.3,
        density:1.0,
        }

        this.body=Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;

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
            fill("white");
            strokeWeight(4);
            stroke("green");
            rect(0,0,this.width,this.height);
            pop();
        }
    }