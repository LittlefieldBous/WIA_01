window.onload = function() {
	
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);
	
	var ball = new createjs.Shape();
			//Draw a ball width,text string joins
            ball.graphics.setStrokeStyle(5, 'round', 'round');
            ball.graphics.beginStroke(('#000000'));
            //width,height,radius
            ball.graphics.beginFill("#FF0000").drawCircle(0,0,50);
            ball.graphics.endStroke();
            ball.graphics.endFill();
            
			//Draw Line so we can see direction
            ball.graphics.setStrokeStyle(1, 'round', 'round');
            ball.graphics.beginStroke(('#000000'));
            
            //x,y
            ball.graphics.moveTo(0,0);
            ball.graphics.lineTo(0,50);
            ball.graphics.endStroke();
			
			ball.x= 100; //100 pixels to the right
			ball.y= -60; //could also do 100 down
			
			
			// Create Tween
			//createjs.Tween.get(display ibject, {optional Properties})
			//properties can be loop, useTicks, ignorGlobal, boolean, true or false
			// Loop - true or false
			//useTicks, ignoreGlobalPause, etc----
			
			var tween = createjs.Tween.get(ball, {loop:true})
			
			
			//these items can be chained
			//drop the ball to the bottom of the canvas -55, then -360 make one counter-clockwise revolution, then the time to bounce out.
					.to({x:ball.x, y: canvas.height-55, rotation:-360}, 1500, createjs.Ease.bounceOut)
					.wait(1000)
					
					//roll to the right
					.to({x:canvas.width-55, rotation:360}, 2500, createjs.Ease.bouneOut)
					.wait(1000).call(tester)
					.to({scaleX:2, scaleY:2, x:canvas.width-110, y:canvas.height -110}, 2500, createjs.Ease.bounceOut)
					//wait one second
					.wait(1000)
					//.call(tester)
					
					.to({scaleX:.5, scaleY:.5, x:30, y:canvas.height - 30, rotation:-360, alpha:0}, 2500, createjs.Ease.bounceOut)
			
			;
						
		function tester(){
			console.log("It is working");
			
			}	
			
			
		stage.addChild(ball);
		
		//stage.update();	
//stage inside of the tick
   		createjs.Ticker.addEventListener("tick", stage);



}