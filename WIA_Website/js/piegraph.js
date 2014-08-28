//piechart

//References:
//Learning D3.js
//d3 pie chart by Jim Warwick CodePen
//Ray Villalobos-Lynda.com


var piedata =[ //An array of objects data with values for the piechart The pie layout will feed it into an arc shape...

{label: "Fruit & Nuts", value: 25},
{label: "Bread/Grains", value: 25},
{label: "Fish/Meats", value: 15},
{label: "Cheese", value: 15},
{label: "Vegetables", value: 20}
]

var width = 380, //the width of the circle
    height = 380,//the hieght of the circle
    radius = 180, //the radius
    colors = d3.scale.ordinal() //this creates ones own colors
    .range(['#DA635D','#4E4E56','#5B9CA2','#40879F','#B1938B']); //these colors will each be apart of the pie
    

var pie = d3.layout.pie() //create a variable and call the d3 pie layout function
    .value(function(d) { //next I'm going to feed it some data that returns values so seeting up a function that is passing some the value data
        return d.value; //returns the value For example 25, 
    })

//next set up the arc shape
var arc = d3.svg.arc() //setting the arc shape
    .outerRadius(radius) //defines the outer range of the pie chart...this will be no bigger than the radius. Creates the outer circle.


//creating a variable called myChart Note: in the html there is a div with an id="chart".
var myChart = d3.select('#chart').append('svg') //variable myChart next select the id chart and append an svg to it and go ahead and set attributes..
    .attr('width', width) //this is equal to the variable width above
    .attr('height', height)//this sets up the height
    .append('g') //this organizes the shapes as a group. next we are positioning the group.
    
    //this positions the graphic to the center of the width and height
    .attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
    //feed the data
    .selectAll('path').data(pie(piedata))//selects the path and then passes the piedata process method created above and the pie data. this wil return an array of arcs used to draw the shapes
    .enter().append('g') //enter command and append/ create a group
    
    
//If one looks in the dom inside each group has different paths. we need to place the labels in each path..so we need to create a group for each path and place the labels in it. 
        
     .attr('class', 'slice') //add a class of 'slice' //if one looks inside the html they can see these classes added.


var slices = d3.selectAll('g.slice') //selects all of the groups with a class of slice.
        .append('path') //append/create the path
        .attr('fill', function(d, i) { //this function gives it color
            return colors(i); //return colors for each slice
        })
        .attr('d', arc) //passing the data and the arc function
       
       
       //animate seperate pieces 
       
       .on('mouseover', function (d, i) {
  
  d3.select(this) // selects slice
    .transition()//calls transition function/method
      .duration(500)//sets time
      .ease('elastic') //sets animation effect
  .attr('transform', function (d) { //transform function..transform moves a shape
    var dist = 10; //how far the slice will go out
    d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle; //the data objects angle math to move angle outward
    var x = Math.sin(d.midAngle) * dist; //math that moves the angle's x axis
    var y = -Math.cos(d.midAngle) * dist; //math that moves the y axis angle out
    return 'translate(' + x + ',' + y + ')'; //moves the shape coordinates x and y.
  });
}).on('mouseout', function (d, i) {
  d3.select(this) //refers to slice
    .transition() //calls transition
      .duration(500)//time after mouse leaves
      .ease('bounce') //applying animation bounce effect
      .attr('transform', 'translate(0,0)') //moves shaape back to original coordinates.
});

//end of arc
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       

//creating the text selectall the group of slices
var text = d3.selectAll('g.slice') //this will select all groups with a class of slice
    .append('text')//create text element
    .text(function(d, i) { //create a text method with a function that passes the data 
        return d.data.label; //returning the data objects that's inside the data. Thus returning the value and the label
    })
    .attr('text-anchor', 'middle') //creates a text anchor
    .attr('fill', 'white')//filling the text with white font.
    .attr('transform', function(d) { //d using the objects data
        d.innerRadius = 0; //how far away from the radius. the text needs to be moved further away.
        d.outerRadius = radius;
        return 'translate('+ arc.centroid(d)+')' //method to find the center of the data for each slice.
    })
    
   
    
    

