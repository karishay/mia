var logo = Snap(1000, 800);

var bigCircle = logo.circle(150, 150, 100);

bigCircle.attr({
  fill: "#1C1F78",
});

var orbit = logo.ellipse(100, 300, 300, 100);

orbit.attr({
  fill: "#000",
  'fill-opacity': 0.0,
  stroke: "#1C1F78",
  strokeWidth: 5
});

orbit2 = orbit.clone();
orbit3 = orbit.clone();
orbit4 = orbit.clone();

orbit2.transform( 't100,100' );
orbit3.transform( 'r20,200,200' );
orbit4.transform( 'r40,200,200' );
