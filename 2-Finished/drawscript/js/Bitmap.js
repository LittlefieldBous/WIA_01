window.onload = function() {
			
			//Canvas & Stage
			var canvas=document.getElementById("canvas");
			
			var stage= new createjs.Stage(canvas);
			
			var bmp = new createjs.Bitmap();
			
			//load the image and wait until it is fully loaded
			
			//Get the image 
			var img = new Image();
			img.src = "images/ship2.svg";
			img.onload = updateStage;
			
			function updateStage(e){
				bmp = new createjs.Bitmap(e.target);
				
				//Center of the canvas
				var centerX = canvas.width/2;
				var centerY = canvas.height/2;
				
				// Set our images x & y
				bmp.x = centerX;
				bmp.y = centerY;
				
				//Change registration point
				bmp.regX = 50;
				bmp.regY = 50;
				
				//Scale it up
				 bmp.scaleX = 1.1;
				 bmp.scaleY = 1.1;
				
				//adds it to the stage
				stage.addChild(bmp);
				
				//stage.update();
				
		}			
				// Add event listener for our "tick"
				createjs.Ticker.addEventListener("tick", ticker);
				
		function ticker(e){
			//Anything in here will run default of 20 fps
			bmp.rotation +=2;
			bmp.x +=2;

//make sure to place the stage.update at the end so the function works!
			stage.update();
			
			}
				
	
				
				
		
			
}