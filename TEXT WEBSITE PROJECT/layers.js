class Layer{
	constructor(){
		this.sides = lineNumb;
		this.numbShapes = randomSelect2() ? this.sides : this.sides * 2
		this.angle = 360 / this.numbShapes;
		this.stepOut = 8;
		this.singleStep = (size / 2) / (this.stepOut)
		this.thinStroke = 1
		this.ThickStroke = 3
		this.strokeColor = randomFromPallete()
		this.randomWeight = randomSelect2() ? this.thinStroke : this.ThickStroke;
	}
}

class Circles extends Layer{
	constructor(){
		super()
		console.log(this.angle)
		this.shapeSize = (size / 2) * 0.93;
		this.position = (size / 2) - (this.shapeSize / 2);
	}

	render(){
		noFill()

		stroke(this.strokeColor);
		strokeWeight(this.randomWeight);

		push()
		translate(width / 2, height / 2)
		for(let i = 0; i <= this.numbShapes; i++){
			ellipse(this.position, 0, this.shapeSize, this.shapeSize)
			rotate(this.angle);
		}
		pop()
		}
}

class Lines extends Layer{
	constructor(){
		super()
		this.numSteps = randomSelect2() ? this.stepOut : int(this.stepOut * 1.25);
		this.start = floor(random(0, this.numSteps));	
		this.stop = floor(random(0, this.numSteps + 1));
		this.step = (size / 2) / this.numSteps;
	}

	render(){
		console.log(this.numbShapes)
		strokeWeight(this.randomWeight);
		stroke(this.strokeColor);

		push();
			translate(width / 2, height / 2);
			for(let i = 0; i < this.numbShapes; i++){
				line(this.start * this.step, 0, this.stop * this.step, 0);
				rotate(this.angle);
			}
		pop();	
	}
}

class Outline extends Layer{
	constructor(){
		super()
		this.hexagonTrue = randomSelect2();
		console.log("hexagon boolean value: " + this.hexagonTrue)
	}

	render(){
		stroke(this.strokeColor);
		strokeWeight(this.randomWeight);

		push();
		translate(width / 2, height / 2);
		if (this.hexagonTrue){
			hexagon(0, 0, size / 2)
			console.log(size)
		} else{
			ellipse(0, 0, size, size);
		}
		pop();

	}
}