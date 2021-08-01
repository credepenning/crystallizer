var size = 200;
var lineNumb = 6;
let pallete = [];

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	noLoop();

	pallete = [
		color(255, 0, 137),
		color(0, 255, 200),
	]
}

function draw() {
	background(0);
	const layer = new Circles();
	layer.render();

	const lineLayer = new Lines();
	lineLayer.render();

	const outline = new Outline();
	outline.render();
	//console.log(layer)
	// outlineShape();
	// testLines();
	// simpleLines();
	// myCircle();

	// let picker = random(1);
	// if(picker > 0.3){
	// 	outlineShape()
	// }

	// picker = random(1)
	// if(picker > 0.3){
	// 	simpleLines()
	// }

	// picker = random(1)
	// if(picker > 0.3){
	// 	myCircle()
	// }

}

function myCircle(){
	const numbShapes = lineNumb;
	const angle = 360 / numbShapes
	const shapeSize = (size / 2) * 0.93;
	const position = (size / 2) - (shapeSize / 2);

	noFill()

	const strokeColor = randomFromPallete();

	stroke(strokeColor);
	strokeWeight(1);

	push()
	translate(width / 2, height / 2)
	for(let i = 0; i <= numbShapes; i++){
		ellipse(position, 0, shapeSize, shapeSize)
		rotate(angle);
	}
	pop()
}

function outlineShape(){
	const strokeColor = randomFromPallete();
	const weight = randomSelect2() ? 1 : 3;
	const hexagonTrue = randomSelect2();

	stroke(strokeColor);
	strokeWeight(weight);

	push();
	translate(width / 2, height / 2);
	if (hexagonTrue){
		hexagon(0, 0, size / 2)
	} else{
		ellipse(0, 0, size, size);
	}
	pop();
}

function simpleLines(){
	const stepsIn = 8;
	const numSteps = randomSelect2() ? stepsIn : int(stepsIn * 1.25);
	const step = (size / 2) / numSteps;
	const start = floor(random(0, numSteps));
	const stop = floor(random(0, numSteps + 1));

	let numbShapes = randomSelect2() ? lineNumb : lineNumb * 2;
	const weight = randomSelect2() ? 1 : 3;
	const strokeColor = randomFromPallete();

	const angle = 360 / numbShapes;

	strokeWeight(weight);
	stroke(strokeColor);

	console.log("number of steps: " + numSteps);
	console.log("start position: " + start);
	console.log("stop position: " + stop);

	push();
		translate(width / 2, height / 2);
		for(let i = 0; i < numbShapes; i++){
			line(start * step, 0, stop * step, 0);
			rotate(angle);
		}
	pop();	
}
