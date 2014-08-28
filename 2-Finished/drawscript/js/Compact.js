window.onload = function() {

//compact code:
//if same code can be chained together
//code shortcuts
//origin(x,y) = bf
//radius = bs
//sides = f
//pointSize = lf
//angle = ls
//beginStroke = s
//drawPolystar = dp
//drawRect = r or dr
//lineTo = lt
//moveTo =mt
//closepath =cp


var canvas = document.getElementById("canvas1");

var stage = new createjs.Stage(canvas);


var shape = new createjs.Shape();


//create our stroke
shape.graphics.beginStroke("blue");

shape.graphics.setStrokeStyle(10,"round", "round");

//draw triangle
shape.graphics.moveTo(50,50);
shape.graphics.lineTo(250,250);
shape.graphics.lineTo(50,250);
shape.graphics.closePath();

//the smaller the file the faster it downloads on to the screen. more efficient
//Chain Commands
//When first part is the same, you can chain code together with a .
shape.graphics.beginStroke("red").setStrokeStyle(10,"round", "round").moveTo(50,50).lineTo(250,250).lineTo(50,250).cp();

//chain commands-Compact using hte shortcut commands
shape.graphics.s("purple").ss(10,"round", "round").mt(50,50).lt(250,250).lt(50,250).closePath();



stage.addChild(shape);

stage.update();


}