window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//Create a red circle
	var shape = new createjs.Shape();
	
	//circle one
	//Set Stroke
	shape.graphics.beginStroke("#DA635D");
	shape.graphics.setStrokeStyle(10, "butt", "round");
	shape.graphics.beginFill("#DA635D");
	
	//Draw circle
	//drawCircle(x, y, radius)
	shape.graphics.drawCircle(50, 100, 50);
	
	
	
    shape.graphics.beginStroke("blue");
	shape.graphics.setStrokeStyle(10, "butt", "round");
	shape.graphics.beginFill("blue");
	
	//Draw circle
	//drawCircle(x, y, radius)
	shape.graphics.drawCircle(100, 100, 50);
	

shape.graphics.beginStroke("#40879F");
	shape.graphics.setStrokeStyle(10, "butt", "round");
	shape.graphics.beginFill("#40879F");
	
	//Draw circle
	//drawCircle(x, y, radius)
	shape.graphics.drawCircle(200, 100, 50);

	
	//Draw out the rectangle
	//shape.graphics.rect(0,0, 100, 100);
	
	//Change its registeration point
	shape.regX = 90;
	shape.regY= 90;
	
	//Move the shape to (100,100)
	shape.x = 200;
	shape.y = 200;
	
	stage.addChild(shape);
	
	
	//circle two
	//Set Stroke
	//shape.graphics.beginStroke("#5B9CA2");
	//shape.graphics.setStrokeStyle(10, "butt", "round");
	//shape.graphics.beginFill("#5B9CA2");
	
	//Draw circle
	//drawCircle(x, y, radius)
	//shape.graphics.drawCircle(200, 200, 50);
	

	
	//Draw out the rectanlge
	//shape.graphics.rect(0,0, 100, 100);
	
	//Change its registeration point
	//shape.regX = 95;
	//shape.regY= 95;
	
	//Move the rect to (100,100)
	//shape.x = 100;
	//shape.y = 100;
	
	//stage.addChild(shape);

	
	//stage.update();
	
	
	//Ticker class controls time 
	//A centrallized heart beat that makes a "tick"
	//Create a listener for that tick
	
	//Set our frame rate.  FPS frames per second
	//Default value is 20 fps
	createjs.Ticker.setFPS(20);  //controls how fast it spings
	//30 Frames per second
	
	
	//Create a listener //listening for a text string of "tick" and creating a function called ticks.
	
	createjs.Ticker.addEventListener("tick", ticks);
	
	//function created called ticks put an e for event
	function ticks(e){
		
			//console.log("tick");
			
			//shape.rotation +=2;
			
			 //shape.alpha -=.05;
			
			//shape.x +=1; //moves circle across the screen like a boat if only an x.
		    //shape.y +=5; //moves circle down
			
			
		     shape.skewX +=.5; //spins a circle .1 to 20
			 //shape.skewY +=1;
			
			 //shape.scaleX +=.1; //grows
			 //shape.scaleY +=.1;
			
				//make sure the stage.update is at the end of the function		
			stage.update();
		
		}
	
	
			
}