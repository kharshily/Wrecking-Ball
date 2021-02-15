class Ball
{
	constructor(x,y,r)
	{
		var options = {
			frictionAir: 0.005,
			density: 1
		}

		this.x = x;
		this.y = y;
		this.r = r;
		
		this.body = Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var bobpos=this.body.position;
		push();
		ellipseMode(RADIUS);
		stroke("black");
		fill("olive");
		ellipse(bobpos.x, bobpos.y, this.r, this.r);
		pop();	
	}
}