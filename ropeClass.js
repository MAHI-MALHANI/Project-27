class Rope{
    constructor(body1, body2, offsetX, offsetY){

        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10
        }
        this.rope=Constraint.create(options);
        World.add(world, this.chain);
    } //end of constructor
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;
        strokeWeight(4);
        // a line between two bodies represents a chain
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
        
}