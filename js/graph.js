// // set the dimensions of the canvas
var data = [
  {
    "Letter": "Jan-17",
    "Freq": 2000
  },
  {
    "Letter" : "Feb-17",
    "Freq": 0
  },
  {
    "Letter" : "Mar-17",
    "Freq": 4700
  },
  {
    "Letter" : "Apr-17",
    "Freq": 3400
  },
  {
    "Letter" : "May-17",
    "Freq" : 5400
  },
  {
    "Letter" : "Jun-17",
    "Freq" : 2100
  },
  {
    "Letter" : "Jly-17",
    "Freq" : 0
  },
  {
    "Letter" : "Aug-17",
    "Freq" : 3100
  },
  {
    "Letter" : "Sep-17",
    "Freq" : 17000
  },
  {
    "Letter" : "Oct-17",
    "Freq" : 5000
  },
  {
    "Letter" : "Nov-17",
    "Freq" : 2300
  },
  {
    "Letter" : "Dec-17",
    "Freq" : 39000
  },
  {
    "Letter" : "Jan-18",
    "Freq" : 29000
  },
  {
    "Letter" : "Feb-18",
    "Freq" : 33000
  },
  {
    "Letter" : "Mar-18",
    "Freq" : 1800
  },
  {
    "Letter" : "Apr-18",
    "Freq" : 3500
  },
  {
    "Letter" : "May-18",
    "Freq" : 11000
  }
  ];
var margin = {top: 20, right: 20, bottom: 70, left: 40},
width = 600 - margin.left - margin.right,
height = 300 - margin.top - margin.bottom;


// set the ranges
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

// define the axis
var xAxis = d3.svg.axis()
.scale(x)
.orient("bottom")


var yAxis = d3.svg.axis()
.scale(y)
.orient("left")
.ticks(10);


// add the SVG element
var svg = d3.select("#graph").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", 
      "translate(" + margin.left + "," + margin.top + ")");

      data.forEach(function(d) {
        d.Letter = d.Letter;
        d.Freq = +d.Freq;
    });
    
    // scale the range of the data
    x.domain(data.map(function(d) { return d.Letter; }));
    y.domain([0, d3.max(data, function(d) { return d.Freq; })]);
    
    // add axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );
    
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Spendings");
    
    
    // Add bar chart
    svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.Freq); })
      .attr("height", function(d) { return height - y(d.Freq); });
// load the data
// d3.json("data.json", function(error, data) {



// });