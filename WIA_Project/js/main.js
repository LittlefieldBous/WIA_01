/*  
Project: Valhalla Sandwiches and Wraps
Amy Littlefield-Bousamra
Web Interaction & Animation
Instructor: Eric Silvay
Full Sail University

*/

//d3 Demonstration practice these skills...

//d3.select('.item').text('select') //In d3.js A selection can be acted on by passing a method. For example the text method as demonstrated in this line.

//d3.selectAll('.item:nth-child(3)').text('select')

//d3.selectAll('.item:nth-child(3n)') using both css selectors and html
//.html('<strong>Learning D3.js</strong>')

//d3.selectAll('.item:nth-child(odd)').text('select') //this will select all odd elements or could write 2n+1

//d3.selectAll('.item:nth-child(n+3)').text('select') //this will select the third element and everything after..

//d3.selectAll('.item:nth-child(2n)').text('select') //this will select all the even 

//append
//d3.select('.item')
//.append('div') places another div within the first div with the strong tag and word "selction."
//.html('<strong>selection</strong>')


//append
//d3.select('.item')
//.append('span') places the item on the same line//.html('<strong>selection</strong>')


//to add an item
//d3.select('#sandwich')
//.insert('span',':nth-child(3)') //in this example places the item on line2
//.html('<strong>Ham and Cheese</strong>') //adds ham and cheese sandwich


//to remove an item
//d3.select('#sandwich.item:nth-child(3)')
//.remove() //to remove the ham and cheese sanwich



//d3 attribute modification

//highlighting words
//d3.selectAll('.item')
//.attr('class', 'highlight')

//toggle highlighting:
//highlighting specific words adds classes.
//d3.selectAll('.item:nth-child(3)')
//.classed({
//'highlight':true,
//'item':false,
//'bigger':true
//})


//adding style to classes
//d3.selectAll('.item:nth-child(4)')
//.style({
//'background': '#268BD2',
//'padding':'10px',
//'margin':'5px',
//'color':'#EEE8D5'
//})

//the first item has a color...has only one

//var myStyles = ["#268BD2"];//setting a value

//d3.selectAll('.item')
//.data(myStyles) //passing true value in the data method
//.style('background', myStyles[0])


//use a function when more than one..

//setting a value
/*var myStyles = [
'#268BD2', 
'#BD3613',
'#D11C24',
'#C61C6F',
'#595AB7',
'#217657'
];

d3.selectAll('.item')
.data(myStyles) //passing myStyles
.style({
'color':'white', //changes the font color
'background' : function(d){ //pass along the array of objects/colors
return d; //return the value/color
}
})*/

 /*div class="item">The Oseberg ship Steak and Cheese</div>
  <div class="item">The Viking Burger</div>
  <div class="item">Thor's Pulled Pork BBQ Burger</div>
  <div class="item">Nanna's Nature burger</div>
  <div class="item">Odin's Smoked Turkey and Bacon</div>
  <div class="item">Freya's Perch Sandwich</div>*/


//setting a value
var myStyles = [
{width: 230,
name:'The Oseberg ship Steak and Cheese',
color:'#268BD2'}, 
{width:230,
name:'The Viking Burger',
color:'#BD3613'},
{width:230,
name: "Thor's Pulled Pork BBQ Burger",
color: '#D11C24'},
{width:230,
name:"Nanna's Nature burger",
color:'#C61C6F'},
{width:230,
name:"Odin's Smoked Turkey and Bacon",
color:'#595AB7'},
{width:230,
name:"Freya's Perch Sandwich",
color:'#217657'}
];

d3.selectAll('#sandwich').selectAll('div') //selectAll div. ties the append ('div') together
.data(myStyles) //passing myStyles
.enter().append('div')
.classed('item',true)
.text(function(d){
return d.name;	
})
.style({
'color':'white', //changes the font color
'background' : function(d){ //pass along the array of objects/colors
return d.color; //return the value/color ...can add more styles following this
},
width: function(d){
return d.width + 'px'; //also adding pixels
}
}) 

.exit() // can do an exit command 


//canvas
window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
		//Create a linear gradient
		//createLinearGradient(x0,y0, x1, y1)
		var linGrd = ctx.createLinearGradient(10,10, 10, 280);
		
		//Adding Color Stops
		
		linGrd.addColorStop(0, "#FFFFFF");
	    linGrd.addColorStop(1, "#FDF6E3");


		
		//Create a rectangle
		ctx.fillStyle = linGrd;
		ctx.fillRect(0,0, 958, 400);
				
		
 /*background-image: -webkit-gradient(
	linear,
	left top,
	left bottom,
	color-stop(0.09, rgb(255, 255, 255)),
	color-stop(1, rgb(240, 239, 228))
);*/
		//Create a radial gradient
		//createRadialGradient(x0,y0, r0, x1, y1, r1)
		/*var radGrad = ctx.createRadialGradient(525, 100, 20, 525, 150, 100);
		
		//Add color stops
		radGrad.addColorStop(0, "#f00");
		radGrad.addColorStop(.5, "#00f");
		radGrad.addColorStop(1, "#0f0");
		
		
		ctx.fillStyle = radGrad;
		
		ctx.beginPath();
		ctx.arc(525, 150, 100, 0, 2*Math.PI);
		ctx.fill();*/
		
		
						
		}
	}
}




//jquery

//(function($) {

   
//})(jQuery); // end private scope


	

