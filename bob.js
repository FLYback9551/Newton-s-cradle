class Bob
{
	constructor(x,y,r)
	{
		
		var options={
			isStatic:false,
			restitution:0.1,
			friction:0.3,
			density:0.8
			
			}
			this.x = x;
			this.y = y;
			this.r=r;
		
	    this.body=Bodies.circle(this.x,this.y,(this.r)/2, options);
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			//push();
			//translate(pos.x,pos.y);
			//rectMode(CENTER);
			ellipseMode(RADIUS);
			fill(255,0,255)
			ellipse(pos.x,pos.y,this.r,this.r);
			//pop();
		
			
	}

}


