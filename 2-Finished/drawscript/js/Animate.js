window.onload = function() {
			
			//Canvas & Stage
			var canvas=document.getElementById("canvas");
			
			var stage= new createjs.Stage(canvas);
			
			var bmp = new createjs.Bitmap();
			//Center of the canvas
			var centerX = canvas.width/2;
			var centerY = canvas.height/2;
			
			//Get the image 
			var img = new Image();
			img.src = "images/ship.png";
			img.onload = updateStage;
			
			function updateStage(e){
				bmp = new createjs.Bitmap(e.target);
				
			
				
				// Set our images x & y
				bmp.x = centerX;
				bmp.y = centerY;
				
				//Change reg points
				bmp.regX = 225;
				bmp.regY = 225;
				
				//Scale it up
				//bmp.scaleX = 2;
				//bmp.scaleY = 2;
				
				stage.addChild(bmp);
				
				//stage.update();
				
		}			
				// Add event listener for our "tick"
				createjs.Ticker.addEventListener("tick", ticker);
				
		function ticker(){
			//Anything in here will run default of 20 fps
			//bmp.rotation +=2;
			//bmp.x +=2;
			
			
			//Shake the ship
			
			//bmp.x = centerX + Math.random() * 5;
			//bmp.y = centerY + Math.random() * 5;
			
			//Shake in both directions 
			//bmp.x = centerX + (Math.random() -.5) * 50; //lower than 50 it will shake less. 50 it shakes more
			//bmp.y = centerY + (Math.random()-.5 )* 50;

			//Ship will go in a wave motion
			///Sin and Cos  
			
			bmp.x = centerX + Math.sin(3);

			// getTicks()  - that returns the current of ticks
			// the divided number controls the speed and * number is the distance away from the center point.
			 bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/10)*20;
			 bmp.y = centerY + Math.sin(createjs.Ticker.getTicks()/10)*20;
			
			//Circle path
			 bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/40)*200;
			 bmp.y = centerY + Math.cos(createjs.Ticker.getTicks()/10)*20;
			

			stage.update();
			
			}
				
	
				
				
		
			
}