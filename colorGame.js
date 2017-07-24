var numSquares = 6; 
var colors = [];
var winner = false; 
var pickedColor;
var h1 = document.getElementById("backgroundDisplay")
var squares = document.getElementsByClassName("square")
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var resetButton = document.getElementById("resetButton");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	//set up modeButton 
		setUpModeButtons();
		setUpSquares();
	    reset();
}

function setUpModeButtons(){
		//mode button listner change easy or hard
			for(var i = 0; i < modeButton.length; i++){
			modeButton[i].addEventListener("click",function(){
				modeButton[0].classList.remove("selected");
				modeButton[1].classList.remove("selected");
				this.classList.add("selected");
				if(this.textContent === "Easy"){
					numSquares = 3; 
				}else{
					numSquares = 6; 
				}
				reset();
				});
			}
	}

function setUpSquares(){
		for(var i = 0; i < squares.length; i++){
			squares[i].addEventListener("click",function(){
				var clickedColor = this.style.backgroundColor;
				if(clickedColor === pickedColor){
					message.textContent = "Correct!"; 
					resetButton.textContent = "Play Again?";
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor; 
				}else{
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again";
				}
			
			});
		}
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	console.log(colors.length);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS";
	message.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
		  	squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"

}


resetButton.addEventListener("click",function(){
	reset();
});


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//chage each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length); 
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		// get random color and push into arr 
		arr.push(randomColor());	
	}
	return arr; 
}

function randomColor(){
	//pick a 'red' from 0 - 255
	var r = Math.floor(Math.random() * 256); 
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", "+ b + ")";
}