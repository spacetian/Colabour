var canvasWidth = 200;
var canvasHeight = 200;

window.onload = function(){
   createCanvas();
// drawRect();
   drawImage();

}

function createCanvas(){
	document.body.innerHTML = "<canvas id=\"mycanvas\" width=\"" +canvasWidth + "\"" + " height=\"" + canvasHeight + "\"></canvas>";
}

function drawRect(){
    var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "rgb(200,200,0)";  

	ctx.translate(10,10);
	ctx.fillRect(10, 10, 55, 50);
	ctx.scale(2,8.5)
}


function drawImage(){
	var img = new Image();
	img.onload = function(){
		context.drawImage(img, 0, 0);
	}
	img.src ="img/content.png";
}
