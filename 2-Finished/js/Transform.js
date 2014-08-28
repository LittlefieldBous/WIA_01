window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//Create a shape
	var shape = new createjs.Shape();
	
	//Setup our fill
	shape.graphics.beginFill("#DA635D");
	
	//Draw a rectangle x,y, width, height
	shape.graphics.drawRect(50,50, 100, 100); //could have started at 0,0 
	
	//Lets rotate this is in degrees
	//It rotates around the registration point 
	//shape.rotation = 30;
	
	//Move/changeRegistration Point
	shape.regX = 100;   //Origin point + width/2  
	shape.regY = 100;  //Origin point + height/2  
	//shape.rotation = 30; //rotates the square
	
	shape.x = 200; //200 to the right
	shape.y = 100; //100 down
	 
	// start the rect at (0,0, 100, 100) , regX & regY = 50, 50
	
	
	//Scaling
	//.5 is half
	//2 is twice
	 //shape.scaleX = .5;//making width half as big
	 //shape.scaleY = .5; //making height half as big
	 
	 //make into a longer rect
	 shape.scaleX = 1.5;//change width
	 shape.scaleY = .5; //making height half as big
	
	//alpha-transparency
	//Alpha   0 - 1
	//.25 = 25% of the color will show
	//1 = 100% fully opaque
	shape.alpha = 1;
	
	//Visible
	// 0 - not visible
	//1 - visible
	shape.visible = 1; 
	//When not visible - not drawn and not clickable
	
	//note:
	//alpha is still clickable
	//visibility doesn't even draw it.
	
	//Skewing 
	 shape.skewX = 200; //horizontal plane is shifted by 200 pixels/creates a parallelogram
	//shape.skewY= 200; //vertical plane shifts
	
	stage.addChild(shape);
	stage.update();
	
	
	
}