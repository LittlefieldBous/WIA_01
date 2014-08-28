window.onload = function() {
	
	//First we will get our canvas and create a stage
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas); //set up the stage
	
	//Draw a rectangle
	
	// First create a new shape -draw a simple rectangle
	
	var rect1 = new createjs.Shape(); //draw rectangle
	
	
	//Basic fill
	 //rect1.graphics.beginFill("purple");
	 
	 
	 //Declare a fill using : name, hex color, rgb, rgba, hsl, hsla
	 //rect1.graphics.beginFill(createjs.Graphics.getRGB(162,216,255));
	 //rect1.graphics.beginFill("rgb(162, 216, 255)");
	 
	 //RGBA
	 rect1.graphics.beginFill(createjs.Graphics.getRGB(162,216,255, .5)); //makes it more transparant
	 //HSl
	 //rect1.graphics.beginFill(createjs.Graphics.getHSL(120,100,50, .5));
	 
	 	 
	 // Linear Gradients
	 
	 // colors,ratios 0 start 1 end, where do we want to draw it from 50x 50y first point to 2nd point 150x 150y this gives the color a diagonal type of gradient
	 
	 //rect1.graphics.beginLinearGradientFill(["yellow", "red"], [0,1], 50,50, 150, 150);
	 
	 //Horizontal line
	 
	 //rect1.graphics.beginLinearGradientFill(["yellow", "red"], [0,1], 50,50, 150, 50);
	  
	  //Vertical
	   //rect1.graphics.beginLinearGradientFill(["yellow", "red"], [0,1], 50,50, 50, 150);
	   
	   //add a color stop
	   //rect1.graphics.beginLinearGradientFill(["yellow","purple", "red"], [0,.5,1], 50,50, 150, 150);
	   
	 
	 //Radial Gradients
	 //colors, ratio start at 0 beginning and go to end 1, x,y, origin point, center point=100,100 radius at 0 second circle 100,100 and leave radius at 0
	 rect1.graphics.beginRadialGradientFill(["yellow", "red"], [0,1], 100,100, 0, 100, 100, 100);
	 
	 
	 //Draw the rectangle
	 //fillRect or rect
	 rect1.graphics.rect(50,50, 100, 100);
	 
	 //Add to the stage
	 stage.addChild(rect1);
	 
	 //To draw on the canvas, update the stage
	 stage.update();
			
}