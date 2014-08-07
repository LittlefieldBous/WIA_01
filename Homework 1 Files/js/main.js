/*
     Name: Amy Littlefield-Bousamra
     Date: 08/2014
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */

    
    /*if(Modernizr.canvas){
	//canvas is supported
		
		var theCanvas = document.getElementById("Canvas1");
		var ctx = theCanvas.getContext("2d");
		
		ctx font = "25pt Georgia";
		ctx.fillText("Canvas is supported!", 20, 60);
		
}else{
	//canvas is not supported
	//polyfill would go here
	
}*/



      
/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below*/
    
/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/




/*PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

  window.onload = function(){ //anytime the window is loaded this will run...
				
				var theCanvas = document.getElementById("Canvas1"); //create a variable that holds the canvas..using canvas1

			  				
				if(theCanvas){
					//Get Context
					var ctx = theCanvas.getContext("2d"); //create a variable getcontext 2d
				

             if(ctx){
             
             //Draw a stroked Rectangle
							ctx.strokeStyle = "black"; //ctx call to context variable
							ctx.lineWidth =2;
							ctx.fillStyle = "#3358A1";
							
//draw the rectangle...
							//strokeRect(posX, posY, Width, Height)
							ctx.strokeRect(0,0, 50,100);	//0 to the right and 0 down	50 width 100 height
							ctx.fillRect(0, 0, 50, 100);
							
							  }
							
							}
							
						
						
    

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

			/*2nd canvas*/
				
				var theCanvas = document.getElementById('Canvas2');
				if (theCanvas && theCanvas.getContext) {
					var ctx = theCanvas.getContext("2d");
					if (ctx) {
					
						//set style
						ctx.strokeStyle= "#000000";
						ctx.fillStyle = "#CC3300";
						ctx.lineWidth = 1;
						ctx.globalAlpha = 0.5;
						
						var degrees = 360; //set variable to 360 
						var radians = (degrees/180)*Math.PI; //converts degrees to radians
						//a circle
						ctx.beginPath();
						//arc(x,y, r, sA, eA, Clockwise or counter); //sa=starting angle ae=ending 
						ctx.arc(50,50, 20, 0,radians);
						ctx.fill(); //fills circle color
                        ctx.stroke();
                        
                       						
					}
				}
	



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here


var theCanvas = document.getElementById('Canvas3');
				if (theCanvas && theCanvas.getContext) {
					var ctx = theCanvas.getContext("2d");
					if (ctx) {
						ctx.strokeStyle = "orange";
						ctx.fillStyle= "yellow";
						ctx.lineWidth = 2;
						
						//Draw an open path
						ctx.beginPath();
						ctx.moveTo(100,100);
						ctx.lineTo(140,5);
						ctx.lineTo(175,100);
						ctx.lineTo(80,40);
						ctx.lineTo(200,40);
						ctx.lineTo(100,100);
						
						//ctx.lineTo(175,175);
						//ctx.lineTo(50,75);
						//ctx.lineTo(195,75);
						//ctx.lineTo(50,75);
						//ctx.moveTo(50,175);
						//ctx.lineTo(195,75);
						
						
						
						//ctx.lineTo(25,175);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
						
					
						
					}
				}



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here


	var theCanvas = document.getElementById('Canvas4');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				ctx.strokeStyle = "blue";
				ctx.fillStyle= "#9999FF";
				ctx.lineWidth = 5;
				
				//Stroke a simple bezier curve
				ctx.beginPath();
				ctx.moveTo(50,200);
				
				//bezierCurveTo(cx1, cy1, cx2, cy2, x, y )		
				
				ctx.bezierCurveTo(50, 20, 270, 20, 300, 200);
				ctx.bezierCurveTo(220,150,240,210,220,200);
				ctx.bezierCurveTo(160,150,140,212,140,200);
				ctx.bezierCurveTo(90,145,60,200,50,200);
				

				ctx.fill();
				ctx.stroke();		
						
				
				//quadratic curve
				//ctx.beginPath();
				//ctx.moveTo(400,200);
				
				//quadraticCurveTo(cx, cy, x, y)
				
				//ctx.quadraticCurveTo(500,100, 600, 150);
				//ctx.stroke();			
						
						
		}
	}
	
	//the hook for the umbrella
	var theCanvas = document.getElementById('Canvas4');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				ctx.strokeStyle = "blue";
				ctx.lineWidth = 5;
				
				//Stroke a simple bezier curve
				ctx.beginPath();
				ctx.moveTo(180,200);
				
				//bezierCurveTo(cx1, cy1, cx2, cy2, x, y )		
				
				ctx.bezierCurveTo(180,330,100,280,130,240);
				
				
				ctx.stroke();		
						
				
				
		}
	}




/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here


	var theCanvas = document.getElementById('Canvas5');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			
			var theString = "a horse! a horse my kingdom for a horse!";
			
			//Simple text using defaults
			ctx.fillText(theString, 20,20);			
			
			//Style the font
			ctx.font = "12pt Georgia";
			ctx.fillStyle = "blue"
			ctx.fillText(theString, 20, 60);			
						
			//Stroke and Fill Text
			ctx.font="12pt Verdana";
			ctx.fillStyle = "#9ACD32";
			ctx.textBaseline= "middle";
			ctx.strokeStyle = "rgba(105, 105, 105, .5)";
			ctx.fillText(theString, 20, 160);
			ctx.strokeText(theString, 20, 160);
						
						
		}
	}


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
  
   //the sun
				var theCanvas = document.getElementById('Canvas7');
				if (theCanvas && theCanvas.getContext) {
					var ctx = theCanvas.getContext("2d");
					if (ctx) {
					
						//set style
						ctx.strokeStyle= "#FF9900";
						ctx.fillStyle = "#FFFF00";
						ctx.lineWidth = 3;
						ctx.globalAlpha = 1;
						
						var degrees = 360; //set variable to 360 
						var radians = (degrees/180)*Math.PI; //converts degrees to radians
						//a circle
						ctx.beginPath();
						//arc(x,y, r, sA, eA, Clockwise or counter); //sa=starting angle ae=ending 
						ctx.arc(70,70, 60, 0,radians);
						ctx.fill(); //fills circle color
                        ctx.stroke();
                        
                       						
					}
				}
				
				//the island
	var theCanvas = document.getElementById('Canvas7');
				if (theCanvas && theCanvas.getContext) {
					var ctx = theCanvas.getContext("2d");
					if (ctx) {
						
						ctx.strokeStyle= "#FFD685";
						ctx.fillStyle = "#FFFFA3";
						ctx.lineWidth = 3;
						
						//arc(x,y, r, sA, eA, Clockwise or counter); //sa=starting angle ae=ending 
												
						//hill/umbrella arc
						 //stroke a 270 degree arc, counter-clockwise
                        ctx.beginPath();
                        ctx.arc(550,280,100,0,1*Math.PI,true);
                        ctx.fill(); //fills circle color
                        ctx.stroke();
                        
						
					}
				}
	

//the tree

	var theCanvas = document.getElementById("Canvas7"); //create a variable that holds the canvas..using canvas1

			   //theCanvas.width = 150;
			   //theCanvas.height = 150;
				
				if(theCanvas){
					//Get Context
					var ctx = theCanvas.getContext("2d"); //create a variable getcontext 2d
					
					if(ctx){
							
					
							
							//Draw the rectangle
							//strokeRect(posX, posY, Width, Height)
													
							//water
							
							//ctx.strokeStyle = "#CC9900";
							ctx.fillStyle = "#1919D1";
							//ctx.lineWidth = 2;
							
							//Draw the rectangle
							//ctx.strokeRect(0, 250, 700, 300);
							ctx.fillRect(0,260, 700, 300);

							
							//tree stem
							ctx.strokeStyle = "#CC9900";
							ctx.fillStyle = "#A37547";
							ctx.lineWidth = 2;
							
							//Draw the rectangle
							ctx.strokeRect(540, 200, 20, 20);
							ctx.fillRect(540, 200, 20, 20);
							
							
							ctx.strokeStyle = "#A37547";
							ctx.fillStyle = "#CC9900";
							ctx.lineWidth = 2;
							
							//Draw the rectangle
							ctx.strokeRect(540, 175, 20, 20);
							ctx.fillRect(540, 175, 20, 20);
							
							ctx.strokeStyle = "#CC9900";
							ctx.fillStyle = "#A37547";
							ctx.lineWidth = 2;
							
							//Draw the rectangle
							ctx.strokeRect(540, 150, 20, 20);
							ctx.fillRect(540, 150, 20, 20);

							
							ctx.strokeStyle = "#A37547";
							ctx.fillStyle = "#CC9900";
							ctx.lineWidth = 2;
							
							//Draw the rectangle
							ctx.strokeRect(540, 125, 20, 20);
							ctx.fillRect(540, 125, 20, 20);
							
							ctx.strokeStyle = "#CC9900";
							ctx.fillStyle = "#A37547";
							ctx.lineWidth = 2;
							
							//Draw the rectangle
							ctx.strokeRect(540, 100, 20, 20);
							ctx.fillRect(540, 100, 20, 20);


							}
					
					
					}





}
