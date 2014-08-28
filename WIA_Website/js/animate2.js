window.onload = function() {
			
			//Canvas & Stage
			//Canvas & Stage
			var canvas=document.getElementById("canvas2");
			
			var stage= new createjs.Stage(canvas);
			
			//create a graphic
	        var shape = new createjs.Shape();			
	        
	     			
					
		//add background
	shape.graphics.f("rgba(147,206,206,254)").p("EBeEAZ8Mhe/AAAIAA6tMBe/AAAIAAat").cp().ef().f("rgba(25,115,139,254)").p("EBeEBBUMhe/AAAMAAAguGMBe/AAAMAAAAuG").cp().ef().f("rgba(244,223,132,254)").p("AKyFoYAACCh4BuiWAAYiWAAh4huAAiCYAAiCB4huCWAAYCWAAB4BuAACC").cp().ef().f("rgba(177,147,139,254)").p("EBXgBDCIl8AAIAAx0IF8AAIAAR0").cp().ef().f("rgba(191,163,159,254)").p("EBXqAxEYAABGhkA8huAAYhuAAhkg8AAhGYAAhGBkgyBuAAYBuAABkAyAABG").cp().ef().f("rgba(91,156,162,254)").p("EBlkAT2MhpJAAAYAAAABukYJNjIcAJYgDIAkGALaAUKgISYUAoSImPyAAAA").cp().ef().f("rgba(177,147,139,254)").p("EBT6AOEIAACMIAKAAIA8AAIAAiMYgKAAAAAAAAAAYgUAAgUAAgUAA").cp().ef().f("rgba(6,96,91,254)").p("EBYSAMqYgoAAgegUgegUYgegUgegegUgeYAyAAAygKAygKYAKAAAAgKgKgKYhGgegegygKg8YAeAAAeAAAegKIAAgKYgygygUg8gUgyYAAgKAAAAAAAAYgUgegKgeAAgoYAAgKgeAAAAAKYgoAoAAAygUAyYgeAyhGAogeAyYgKAKAKAAAKAAYAeAAAeAAAeAKYgoAygyAygyAyYAAAAAAAAAAAKYAKAKAUAAAUAKYAKAAAUAAAUAAYgUAegoAUgeAeYgeAUgeAeAAAeYAAAKAAAAAKAAYA8AUBGAABGAKYAUAAAUAAAUAAYAAAAAKAAAKAAYBQgKBagKAegyYAAgKAAgKgKAA").cp().ef().f("rgba(0,0,0,254)").ss(1.0303211212158203).s("rgba(0,0,0,254)").p("EAXcAxOIAAhGMAvqACWIgKBGMgvggCW").cp().ef().es().f("rgba(0,0,0,254)").ss(1.0714545249938965).s("rgba(0,0,0,254)").p("AXSIwIAAg8MAzaACgIAAA8MgzagCg").cp().ef().es().f("rgba(0,0,0,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EAwIA6wIgeAAMACqg4QIAeAAMgCqA4Q").cp().ef().es().f("rgba(124,103,98,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EBE6BKscgCMACCgpugB4gCCgC0Yh4i+n0uOAAAAMBDWAD6YAAAApsNwiCCM").cp().ef().es().f("rgba(218,99,93,254)").ss(1.0850348472595215).s("rgba(0,0,0,254)").p("EBJmA8AYgKB4haBahugKYhugKhQhkAAhuYAKh4BahQBuAAYBuAKBQBkAABu").cp().ef().es().f("rgba(218,99,93,254)").ss(1.0850348472595215).s("rgba(0,0,0,254)").p("EAcmA5WYgKBuhaBahugKYhuAAhQhkAKh4YAAhuBahaBuAAYBuAKBQBkAAB4").cp().ef().es().f("rgba(218,99,93,254)").ss(1.0850348472595215).s("rgba(0,0,0,254)").p("EAkGA5qYgKB4haBahugKYhugKhQhaAKh4YAAh4BahQBuAAYBuAKBQBkAABu").cp().ef().es().f("rgba(218,99,93,254)").ss(1.0850348472595215).s("rgba(0,0,0,254)").p("EArmA6IYgKB4haBQhuAAYhugKhQhkAKhuYAAh4BahaBuAKYBuAKBQBaAAB4").cp().ef().es().f("rgba(218,99,93,254)").ss(1.0850348472595215).s("rgba(0,0,0,254)").p("EAzGA6mYgKBuhaBahuAAYhugKhQhkAKhuYAAh4BahaBuAKYBuAABQBkAAB4").cp().ef().es().f("rgba(218,99,93,254)").ss(1.0850348472595215).s("rgba(0,0,0,254)").p("EA6mA7EYgKBuhaBahugKYhuAAhQhkAKh4YAAhuBahaBuAKYBuAABQBkAAB4").cp().ef().es().f("rgba(218,99,93,254)").ss(1.0850348472595215).s("rgba(0,0,0,254)").p("EBCGA7iYgKB4haBahugKYhuAAhQhkAAh4YAKhuBahaBuAAYBuAKBQBkAABu").cp().ef().es().f("rgba(218,99,93,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EAoAAJEMgB4AnYIDIAKMAB4gnYIjIgK").cp().ef().es().f("rgba(218,99,93,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EAukAJiMgB4AnOICgAKMAB4gnOIiggK").cp().ef().es().f("rgba(218,99,93,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EBGKAKyMgB4AnYICWAKMAB4gnYIiWgK").cp().ef().es().f("rgba(218,99,93,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("Aa4ISMgB4AnYIDcAUMAB4gnYIjcgU").cp().ef().es().f("rgba(218,99,93,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EA0WAJ2MgB4AnYIDcAKMAB4gnYIjcgK").cp().ef().es().f("rgba(218,99,93,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EA6mAKKMgB4AnYICqAKMAB4gnYIiqgK").cp().ef().es().f("rgba(218,99,93,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EBA2AKeMgB4AnYIB4AKMAB4gnYIh4gK").cp().ef().es().f("rgba(218,99,93,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EAhmAIwMgB4AnYIDIAKMAB4gnYIjIgK").cp().ef().es().f("rgba(253,245,230,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("AeUImMgB4AnYIDSAKMAB4gnYIjSgK").cp().ef().es().f("rgba(253,245,230,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EAkuAI6MgB4AnYIDSAKMAB4gnYIjSgK").cp().ef().es().f("rgba(253,245,230,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EArIAJOMgB4AnYIDcAKMAB4gnOIjcgU").cp().ef().es().f("rgba(253,245,230,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EAxEAJsMgB4AnOIDSAUMAB4gnYIjSgK").cp().ef().es().f("rgba(253,245,230,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EA9QAKUMgB4AnYIDmAKMAB4gnYIjmgK").cp().ef().es().f("rgba(253,245,230,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EA3yAKAMgB4AnYIC0AKMAB4gnYIi0gK").cp().ef().es().f("rgba(253,245,230,254)").ss(1.265028476715088).s("rgba(0,0,0,254)").p("EBCuAKoMgB4AnYIDcAKMAB4gnYIjcgK").cp().ef().es().f("rgba(124,103,98,254)").ss(1.1046017408370972).s("rgba(0,0,0,254)").p("EBOIA4aYCCAoiClohkDwYhuEsF8BkBQlUYBGlAj6iMiWCWYiCCCgUFUB4CC").ef().es().f("rgba(124,103,98,254)").ss(1.0203901529312134).s("rgba(0,0,0,254)").p("EAPoA1SYiCAUCqksBGDmYBQEOlyAogyksYgykiEEhkCCCWYBuCCgKEsh4Bk").ef().es().f("rgba(177,147,139,254)").p("EBdwBOIMhdmAAAIAAs0MBdmAAAIAAM0").cp().ef();
	 
	 //add shape to stage
	stage.addChild(shape);    
	    			
			  var bmp = new createjs.Bitmap();

			//Center of the canvas
				var centerX = canvas.width/5;
				var centerY = canvas.height/5;
							
			//load the image and wait until it is fully loaded
			
			//Get the image 
			var img = new Image();
			img.src = "images/vikingguy.png";
			img.onload = updateStage;
			
			function updateStage(e){
				bmp = new createjs.Bitmap(e.target);
				
								// Set our images x & y
				bmp.x = centerX;
				bmp.y = centerY;
				
				//Change registration point
				bmp.regX = 2;
				bmp.regY = 2;
				
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
			//bmp.rotation +=2; //bmp.rotation +=10;faster
             bmp.x +=1.5;
             //bmp.y +=-.5;
            //bmp.rotation +=.1;
            //bmp.y -=2; //makes it go up
            
	         //bmp.x = centerX + Math.sin(3);

			// getTicks()  - that returns the current of ticks
			// the divided number controls the speed and * number is the distance away from the center point.
			 //bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/5)*10;
			 //bmp.y = centerY + Math.sin(createjs.Ticker.getTicks()/5)*10;
			
			//Circle path
			 //bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/2)*20;
			 //bmp.y = centerY + Math.cos(createjs.Ticker.getTicks()/10)*20;
			

             			 			
			
			//bmp. x =centerX + Math.random() *3;
			bmp. y =centerY + Math.random() *3;

//make sure to place the stage.update at the end so the function works!
			stage.update();
			
			}
				
	
				
				
		
			
}