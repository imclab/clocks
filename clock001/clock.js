function setup() {
	draw();
	setInterval(draw, 1000);
}


function draw() {
 	var now = new Date();
 	var hours = now.getHours();
 	var minutes = now.getMinutes();
 	var seconds = now.getSeconds();
	// set up canvas and drawing context  
	var myCanvas = document.getElementById("clock");
	var drawing = myCanvas.getContext("2d");	

	// save drawing context, then set some globals for the drawing:
	drawing.save();
	drawing.globalCompositeOperation = "destination-over";
	drawing.clearRect(0,0,220,220);
	drawing.translate(150,150);			// move the center into the page
	drawing.scale(0.5,0.5);
	drawing.rotate(-Math.PI/2);			// rotate 1/4 turn ccw
	drawing.lineCap = "round";			// set line styles
	drawing.lineWidth = 4;

	// draw second hand
	drawing.save();						// save canvas rotation/translation, etc
	drawing.rotate(seconds * (Math.PI/30));	// rotate to draw second hand
	drawing.strokeStyle = "#ccc";		// set line style
	drawing.lineWidth = 2;	
	drawing.beginPath();				// begin line
	drawing.moveTo(-10,0); 				// move to where you want to start
	drawing.lineTo(80, 0);				// draw the line
	drawing.stroke();					// render
	drawing.restore();					// reset canvas for next element
	
	// draw minute hand
	drawing.save();
	drawing.rotate(minutes * Math.PI/30);
	drawing.strokeStyle = "#ace";
	drawing.beginPath();
	drawing.moveTo(-10,0); 
	drawing.lineTo(80, 0);
	drawing.stroke();
	drawing.restore();
	
	// draw hour hand
	drawing.save();
	drawing.rotate( hours*(Math.PI/6) );
	drawing.strokeStyle = "#ace";
	drawing.beginPath();
	drawing.moveTo(-10,0); 
	drawing.lineTo(50, 0);
	drawing.stroke();
	drawing.restore();

	// draw circle from 0 to current second:
	drawing.beginPath();
	drawing.strokeStyle = "#5597cf";
	drawing.arc(0,0, 100, 0, seconds * Math.PI/30, false); // draw a circle
	drawing.stroke(); 							// stroke the circle
	drawing.restore();
		

}
