window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	
	//Text class is for working text
	var sentence = new createjs.Text();
	
	//Modify the text property
	sentence.text = "Beautiful Butterflies Bathe in the Sun!";
	
	//Font property - takes most normal css strings
	sentence.font = "bold 30px Verdana";
	
	//Specify a color
	sentence.color= "#40879F";
	
	//Text IS a display object
	//It inherits all of the normal properties
	sentence.x = 20;
	sentence.y = 50;
	//sentence.rotation = 45;
	
	
	//Text has more properties
	//textAlign - "left", "right", "center"
	 sentence.textAlign = "left";
	
	//lineWidth - wraps the text.
	sentence.lineWidth = 200;
	
	//Space inbetween those line
	//lineHeight
	sentence.lineHeight = 35; //space between words
	
	//Stroke the outside of the text
	//outline - boolean
	//sentence.outline = true; //outlines text
	sentence.outline = false; //makes text normal no outline.
		
	//Combine them into one line
	var sentence2 = new createjs.Text("Lovely Ladybugs like lollipops!", "bold 30px Georgia", "blue");
	
	stage.addChild(sentence2);
	
	stage.addChild(sentence);
	stage.update();
	
}