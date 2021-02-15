class Rope
{
	constructor(bob, point)
	{
		var options = {
			bodyA: bob,
			pointB: point,
			stiffness: 1.2,
            length: 250,
		}

		this.point = point;

		this.rope = Constraint.create(options);
		World.add(world, this.rope);
	}

	display()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.point;

		strokeWeight(2);
		stroke("orange");
		line(pointA.x, pointA.y, pointB.x, pointB.y);
	}

}