var paper = Snap(1000, 1800);

var centerX = 350
var centerY = 350

///////////////////////////////////////////////////////////////////////
////////////////////////// Dots Here //////////////////////////////////
///////////////////////////////////////////////////////////////////////

// inner yellow dot
var centerCircle = paper.circle(centerX, centerY, 12);

centerCircle.attr({
  fill: "#E3A249",
});

//two mid orbit on bottom
var circle2 = centerCircle.clone();
circle2.transform( 't90, 190' );
var circle3 = circle2.clone();
circle3.transform( 't-90, 190');

//two mid orbit on top
var circle4 = circle2.clone();
circle4.transform( 't90, -190');

var circle5 = circle3.clone();
circle5.transform( 't-90, -190');

//two mid orbits on left
var circle6 = circle2.clone();
circle6.transform( 't-190, 90');

var circle7 = circle6.clone();
circle7.transform( 't-190, -90');

//two mid orbits on right
var circle8 = circle6.clone();
circle8.transform('t190, -90');

var circle9 = circle7.clone();
circle9.transform('t190, 90');


///////////////////////////////////////////////////////////////////////
////////////////////////// Orbits Here ////////////////////////////////
///////////////////////////////////////////////////////////////////////
// this orbit is the longest two 90 degrees and 180 degrees from center
var orbit = paper.ellipse(centerX, centerY, 300, 85);

orbit.attr({
  fill: "#000",
  'fill-opacity': 0.0,
  stroke: "#1C1F78",
  strokeWidth: 3
});

orbit2 = orbit.clone();
orbit2.transform( 'r90', centerX, centerY );

// outer circular orbit

var outerOrbit = paper.circle(centerX, centerY, centerX-50);

outerOrbit.attr({
fill: "#000",
'fill-opacity': 0.0,
stroke: "#1C1F78",
strokeWidth: 3
});

// middle circluar orbit
var midOrbit = paper.circle(centerX, centerY, centerX-140);

midOrbit.attr({
fill: "#000",
'fill-opacity': 0.0,
stroke: "#1C1F78",
strokeWidth: 3
});

//inner circular orbit
var inOrbit = paper.circle(centerX, centerY, centerX-220);

inOrbit.attr({
fill: "#000",
'fill-opacity': 0.0,
stroke: "#1C1F78",
strokeWidth: 3
});

//inner elipse orbit
var smallOrbit = paper.ellipse(centerX, centerY, 210, 60);
smallOrbit.attr({
  fill: "#000",
  'fill-opacity': 0.0,
  stroke: "#1C1F78",
  strokeWidth: 3
});
smallOrbit.transform( 'r45', centerX, centerY)
smallOrbit2 = smallOrbit.clone();
smallOrbit2.transform( 'r135', centerX, centerY );
