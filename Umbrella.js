class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("man2.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 80;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x + 40,pos.y+60,250,250);
    }
}