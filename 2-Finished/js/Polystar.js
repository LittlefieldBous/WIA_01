window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	
	var shape = new createjs.Shape();
	
	shape.graphics.beginStroke("#40879F");
	//width, cap:round, joint:round
	shape.graphics.setStrokeStyle(5, "round", "round");
	
	//drawPolyStar(x, y, radius, #sides, pointSize, angle)
	//3 sides for a triangle
	//8 sides for a stop sign
	//pointSize - 0 - Polygon   1-Spikes

	
	//5 sides star
	//shape.graphics.drawPolyStar(75, 75, 50,5,.5, -90 ); //star
	//.6 is the inward angles 
	shape.graphics.drawPolyStar(75, 75, 50,5,.6, -90 ); //star 
	//shape.graphics.drawPolyStar(75, 75, 50,17,.6, -90 ); //sun-star change sides..
	//shape.graphics.drawPolyStar(75, 75, 50,5,.5, 0);
	shape.graphics.drawPolyStar(75, 75, 50,5,0, -90 ); //pentagon

	
	
	//a 3 sided polygon - triangle
	//drawPolyStar(x, y, radius, #sides, pointSize, angle)

	shape.graphics.drawPolyStar(550, 75, 50, 3, 0, -90);
	
	
	//var shape2 = new createjs.Shape();
	
	//shape2.graphics.beginFill("red");
	//shape2.graphics.drawPolyStar(250, 250, 50, 3, 0, -90);
	
	//stage.addChild(shape2);
	
	//Add event listener to make it clickable
	//shape2.addEventListener("click", function(event){
		
		//console.log("Red triangle has been clicked");
		
		
		//});
	
	
	stage.addChild(shape);
	stage.update();
}