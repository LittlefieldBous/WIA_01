window.onload = function() {
	
	// Canvas & stage
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	
	//Create a shape
	var shape = new createjs.Shape();
	
	//Set Stroke
	shape.graphics.beginStroke("#40879F");
	shape.graphics.setStrokeStyle(10, "butt", "round");
	//shape.graphics.beginFill("#40879F");
	
	//Draw circle
	//drawCircle(x, y, radius)
	shape.graphics.drawCircle(100, 100, 50);
	
	
	
	//Draw Ellipse
	//drawEllipse(x, y, w, h)
	shape.graphics.drawEllipse(75, 200, 150, 50);
	
	
	//Drawing arcs
	//arc(x, y, radius, startAngle, endAngle, anticlockwise = 1 clockwise*=0)
	//Angles are in radians!
	
	 shape.graphics.beginStroke("red"); //red stroke
	 //shape.graphics.arc(100,100, 75, 0, 90*(Math.PI/180), 0); //arc in right.hand corner
	 //shape.graphics.arc(100,100, 75, 0, 90*(Math.PI/180), 1); //arc almost all around on circle except for the lower right-hand side.

	//shape.graphics.arc(100,100, 75, 0, -90*(Math.PI/180), 1); //arc on upper-right hand side.
	
	//shape.graphics.arc(100,100, 75, 0, -90*(Math.PI/180), 0); //all around circle except for the upper-right hand side.
	
	
	//shape.graphics.arc(100,100, 75, 0, 180*(Math.PI/180), 0);  //1/2 circle underneath
	
	shape.graphics.arc(100,100, 75, 0, 180*(Math.PI/180), 1); ///1/2 circle on top	
	
	//add shape to stage
	stage.addChild(shape);
	//update the graphic so it shows up on the web page.
	stage.update();
	

}