class Bird{
    constructor(x,y){
        var bird_options ={
        restitution: 0.7,
        friction:0.3,
        density:1.0,
        }

        this.body=Bodies.rectangle(x,y,50,50,bird_options);
        this.width=50;
        this.height=50;

        World.add(world,this.body);
        }
        display(){
            var angle = this.body.angle;
            var pos=this.body.position;
            pos.x=mouseX;
            pos.y=mouseY;
            rectMode(CENTER);
            push();
            translate(pos.x,pos.y)
            angleMode(RADIANS);
            rotate(angle);
            fill("red");
            strokeWeight(4);
            stroke("blue");
            rect(0,0,this.width,this.height);
            pop();
        }
    }