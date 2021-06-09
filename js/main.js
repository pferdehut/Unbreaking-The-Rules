// JavaScript Document
let ggC;
let gaC;
let finalC;
var cameraI = false;
let print = false;
let printW = 842;
let printH = 1191;
let rC;
let colorOne, colorTwo;

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("headTitle").classList.remove("front");
}

function offText() {
  document.getElementById("text").style.display = "none";
}

function off2() {
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("headTitle").classList.remove("front");
}

function off3() {
  document.getElementById("overlay3").style.display = "none";
  document.getElementById("headTitle").classList.remove("front");
}

let gA = function(p) {
  var canvasDiv = document.getElementById("gaCanvas");
  var cWidth = canvasDiv.offsetWidth - 2;
  var cHeight = canvasDiv.offsetHeight - 2;
  var myCanvas;
  var organic, characters, kreis, textresult;
  var fontM;
	
  p.preload = function() {
  	fontM = p.loadFont('font/Mulish-VariableFont_wght.ttf');
  }
	
  p.setup = function() {
    myCanvas = p.createCanvas(cWidth, cHeight);
	myCanvas.parent("gaCanvas");
	gaC = p.createGraphics(printW, printH);
	p.noLoop();
	p.textFont(fontM);
	rC = p.random(4);
	if(rC <= 1){
		colorOne = p.color(17, 21, 154);
		colorTwo = p.color(240, 64, 173);
	}else if(rC > 1 && rC<=2 ){
		colorOne = p.color(195, 201, 49);
		colorTwo = p.color(7, 20, 3);
	}else if(rC > 2 && rC<=3 ){
		colorOne = p.color(90, 57, 134);
		colorTwo = p.color(185, 53, 61);
	}else{
		colorOne = p.color(255, 113, 117);
		colorTwo = p.color(122, 210, 194);
	}
	organic = p.createElement('button', '<svg viewBox="0 0 500 500"><path d="M320.939,154.135c-59.458,53.788-195.437-63.964-239.404-28.844 c-38.75,30.952-70.011,171.802-65.846,246.237c3.273,58.496,39.523,121.308,71.684,119.705 c36.174-1.803,43.996-123.329,97.309-161.967c78.326-56.767,154.613,102.103,232.814,49.038 c64.466-43.745,66.593-166.878,66.968-188.592c0.34-19.683,2.469-142.962-54.706-173.911 c-53.024-28.702-104.498,15.491-132.243,36.458C250,88.161,345.025,132.345,320.939,154.135z" stroke="black" stroke-width="4" fill="white" /></svg>');
    organic.parent('gaSelection');
    organic.mousePressed(p.oS);
	characters = p.createElement('button', '<svg viewBox="0 0 500 500"><path class="st0" d="M193,466.5v-336H65.8V39.3h368.4v91.2H307v336H193z" stroke="black" stroke-width="4" fill="white" /></svg>');
    characters.parent('gaSelection');
    characters.mousePressed(p.textPopup);
	kreis = p.createElement('button', '<svg viewBox="0 0 500 500"><circle cx="50%" cy="50%" r="48%" stroke="black" stroke-width="4" fill="white" /></svg>');
    kreis.parent('gaSelection');
    kreis.mousePressed(p.circleShape);
	p.pixelDensity(4);
	  
  };

  p.oS = function(){
	gaC.clear();
	p.clear();
	document.getElementById("zurGestik").innerHTML = "Nächster Schritt";
	document.getElementById("zurGestik").classList.remove("disabled");
    gaC.fill(colorOne);
	gaC.noStroke();
	let rV = gaC.random(5);
  	let x = gaC.random(printW);
  	let y = gaC.random(printH);
  	gaC.beginShape();
  	gaC.vertex(x, y);
	for(let i = 0; i <= rV; i++){
      let x1 = gaC.random(printW);
      let x2 = gaC.random(printW);
      let x3 = gaC.random(printW);
      let y1 = gaC.random(printH);
      let y2 = gaC.random(printH);
      let y3 = gaC.random(printH);
      gaC.bezierVertex(x1, y1, x2, y2, x3, y3);
    }
	gaC.endShape();
	p.image(gaC, 0, 0, cWidth, cHeight);
  };
	
  p.textPopup = function() {
  	document.getElementById("text").style.display = "block";
	document.getElementById("buttonContainer").innerHTML = "";
	textresult = p.createButton('Bild generieren');
	textresult.parent('buttonContainer');
    textresult.mousePressed(p.textRepeat);
  }
  
  p.textRepeat = function() {
	document.getElementById("text").style.display = "none";
  	gaC.clear();
	p.clear();
	document.getElementById("zurGestik").innerHTML = "Nächster Schritt";
	document.getElementById("zurGestik").classList.remove("disabled");
	gaC.textSize(300);
	gaC.textStyle(gaC.BOLD);
  	gaC.noStroke();
  	gaC.fill(colorOne);
	let rr = gaC.random(5);
  	let textArea = gaC.select('#textinput');
  	const car = textArea.value();
  	for (let i = 0; i < car.length; i++) {
    	let rw = gaC.random(printW-80);
    	let rh = gaC.random(printH-80);
		let rw2 = rw+gaC.random(-20,20);
		let rh2 = rh+p.random(-20,20);
		let rw3 = rw2+p.random(-20,20);
		let rh3 = rh2+p.random(-20,20);
		let rw4 = rw3+p.random(-20,20);
		let rh4 = rh3+p.random(-20,20);
    	gaC.text(car.charAt(i), rw, rh);
    
    	if(rr > 1){
			gaC.push();
			gaC.stroke(colorOne);
  			gaC.noFill();
      		gaC.text(car.charAt(i), rw2, rh2);
			gaC.pop();
    	}
    	if(rr > 2){
			gaC.push();
			gaC.noStroke();
  			gaC.fill(colorOne);
      		gaC.text(car.charAt(i), rw3, rh3);
			gaC.pop();
    	}
    	if(rr > 3){
			gaC.push();
			gaC.stroke(colorOne);
  			gaC.noFill();
      		gaC.text(car.charAt(i), rw4, rh4);
			gaC.pop();
    	}
    	if(rr > 4){
			gaC.push();
			gaC.noStroke();
  			gaC.fill(colorOne);
      		gaC.text(car.charAt(i), rw4+gaC.random(-10,10), rh4+gaC.random(-5,5));
			gaC.pop();
    	}
  	}
 	p.image(gaC, 0, 0, cWidth, cHeight);
  };
	
  p.circleShape = function(){
    gaC.clear();
	p.clear();
	document.getElementById("zurGestik").innerHTML = "Nächster Schritt";
	document.getElementById("zurGestik").classList.remove("disabled");
  	gaC.fill(colorOne);
  	gaC.noStroke();
  	gaC.push();
  	gaC.translate(printW / 2, printH / 2);
  	gaC.beginShape();
  	for(var a=0; a<gaC.TWO_PI; a += 0.25){
    	var r = printW/2.2 + p.random(-10, 10);
    	var x = r*gaC.cos(a);
    	var y = r*gaC.sin(a);
    	gaC.curveVertex(x,y);
  	}
  	gaC.endShape();
  	gaC.pop();
	p.image(gaC, 0, 0, cWidth, cHeight);
  };
  
  p.windowResized = function() {
	cWidth = canvasDiv.offsetWidth - 2;
    cHeight = canvasDiv.offsetHeight - 2;
  	p.resizeCanvas(cWidth, cHeight);
  };
  
};
let myp5 = new p5(gA);

const container = document.getElementById("gestikCanvas");
// draw time
let seconds = 5;
// point Size
const minSize = 1;
const maxSize = 80;
let pointSize = 1;
// fist recognition pixel deltas
const deltaHand = 200; // open hand = high delta
const deltaFist = -200;
// map fist recognition to point Size
const scale = (input) => 
  (input - deltaHand) * (maxSize - minSize) / (deltaFist - deltaHand) + minSize;

let state;
let hand;
let timeLeft;
let camera;
let cameraOff = true;
let drawLine = false;
let aerosol = false;

const firstSketch = ( p ) => {
  let rX = p.random(-15, 15);
  let rY = p.random(-15, 15);
  let rE = p.random(2);
	
  p.setup = () => {
    p.createCanvas(container.offsetWidth-4, container.offsetHeight-4);
    state = p.createGraphics(container.offsetWidth-4, container.offsetHeight-4);
    camera = p.createCapture(p.VIDEO);
    camera.size(container.offsetWidth-4, container.offsetHeight-4);
    camera.hide();
	const exportButton = document.getElementById("finalStep");
	exportButton.addEventListener(('click'), () => {
      print = true;
	  drawLine = false;
    });

    const handpose = ml5.handpose(camera, { flipHorizontal: true }, () => { console.log('model loaded') });
    handpose.on('predict', results => { hand = results[0]; });

    const restartButton = document.getElementById('foto');
    restartButton.addEventListener(('click'), () => {	  
      p.clear();
      state.clear();
	  restartButton.classList.add("hide");
      setCountdown();
	  drawLine = false;
	  aerosol = true;
	  document.getElementById("finalStep").innerHTML = "Nächster Schritt";
	  document.getElementById("finalStep").classList.remove("disabled");
    });
	  
	const zeichnen = document.getElementById('zeichnen');
    zeichnen.addEventListener(('click'), () => {
      p.clear();
	  state.clear();
	  drawLine = true;
	  aerosol = false;
	  document.getElementById("finalStep").innerHTML = "Nächster Schritt";
	  document.getElementById("finalStep").classList.remove("disabled");
    });
  };

  const setCountdown = () => {
    timeLeft = seconds;
    const countdown = setInterval(() => {
      if(timeLeft <= 0) { 
		  document.getElementById('foto').classList.remove("hide");
		  clearInterval(countdown); 
		  return; 
	  } 
      timeLeft -= 1;
    }, 1000);
  }

  const setPointSize = () => {
    if(hand) {
      // fist detection with only ringFinger
      const ringLast = hand.annotations.ringFinger[0];
      const ringFirst = hand.annotations.ringFinger[3];
      const delta = ringLast[1] - ringFirst[1];
      pointSize = scale(delta);
      // console.log(delta)
    }
  }

  const drawHand = () => {
    setPointSize()
    if(hand) {
      hand.landmarks.forEach(point => {
        state.fill(colorTwo);
        state.noStroke();
        state.ellipse(point[0], point[1], pointSize, pointSize)
      });
    }
  }

  const drawTime = () => {
    const counter = document.getElementById('timeCount');
    counter.textContent = timeLeft;
  }
  

  p.draw = () => {
	if(aerosol){
		state.noStroke();
    	state.fill(colorTwo);
    	p.image(state, 0, 0);

    	drawTime();

    	if(timeLeft > 0) drawHand();
	}
  };
	
  p.touchMoved = () => {
	  if(drawLine){
		state.strokeWeight(10);
  	  	state.stroke(colorTwo);
	    p.image(state, 0, 0);
  	  	state.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
  	  	state.strokeWeight(2);
  	  	state.line((p.mouseX+rX)*rE, (p.mouseY+rY)*rE, (p.pmouseX+rX)*rE, (p.pmouseY+rY)*rE);
  	  	return false;
	  }
  };
		
};

function gestik() {
  document.getElementById("ga").classList.add("done");
  document.getElementById("headTitle").classList.add("front");
  document.getElementById("gestik").classList.add("active");
  const first = new p5(firstSketch, container);
}


let final = function(p) {
  var canvasDiv = document.getElementById("gaCanvas");
  var cWidth = canvasDiv.offsetWidth - 2;
  var cHeight = canvasDiv.offsetHeight - 2;
  var myCanvas;

  p.setup = function() {
    myCanvas = p.createCanvas(cWidth, cHeight);
	myCanvas.parent("finalCanvas");
	finalC = p.createGraphics(printW, printH);
	p.pixelDensity(4);
	const exportButton = document.getElementById("savePDF");
    exportButton.addEventListener(('click'), () => {
      // copy buffer to image
      const img = p.createImage(printW, printH);
      img.copy(finalC, 0, 0, printW, printH, 0, 0, printW, printH);
    
      // p = portrait, mm = milimeter, [a3 size]
      const doc = new jsPDF('p', 'mm', [420, 297]);
      // add canvas as image base64
      doc.addImage(img.canvas.toDataURL(), 'JPEG', 0, 0, 297, 420);
      // save image
      doc.save('unbroken-poster.pdf');
    });
  };

  p.draw = function() {
	if(print === true){
		finalC.image(state, 0, 0, printW, printH);
		finalC.blend(gaC, 0, 0, printW, printH, 0, 0, printW, printH, finalC.DIFFERENCE);
		p.image(finalC, 0, 0, cWidth, cHeight);
	}
  };

};

function verfremdung() {
  document.getElementById("gestik").classList.add("done");
  document.getElementById("headTitle").classList.add("front");
  document.getElementById("ga").classList.add("doneG");
  document.getElementById("verfremdung").classList.add("active");
  let combined = new p5(final);
}