//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
let value = "#191130"
function draw() {
  background("#835dfa"); //an RGB color for the canvas' background
  //circle
  stroke("#50379b") // an RGB color for the circle's border
  strokeWeight(13)
  fill(value); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,270,270); // center of canvas, 20px dia
}

function mouseClicked() {
	if (value==="#191130") {
		value = "#dad5e8";
	} else {
		value = "#191130";
	}
}