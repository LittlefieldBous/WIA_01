window.onload = function() {
	
	//Canvas and stage
	var canvas= document.getElementById("canvas1");
	
	var stage = new createjs.Stage(canvas);
	
	//Create a graphic shape
	var shape = new createjs.Shape();
	
	//Set stroke styles
	shape.graphics.beginStroke("#DA635D");
	
	shape.graphics.setStrokeStyle(10,"butt","round");
	
	// Draw a rectangle
	shape.graphics.rect(50, 50, 300, 300);
	
	//Rounded Rectangle
	//drawRoundRect(x, y, w, h, radius)
	shape.graphics.beginStroke("#4E4E56");
	shape.graphics.drawRoundRect(75,75, 250, 250, 50);
	
	//Complex Rounded Rectangle
	//drawRoundRectComplex(x,y,w,h,radiusTl, TR, BottomRight, BottomLeft);
	//0 radius means no curve.
	shape.graphics.beginStroke("#40879F");
	shape.graphics.drawRoundRectComplex(100, 100, 200, 200, 50,0,50,0);
	
	
	// add to stage display list
	
	stage.addChild(shape);
	
	//Draw it by calling update
	stage.update();
	
	
}