var numbSquares = 6;
var colors=generateRandomColors(numbSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("newColors")
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var numberOfSquares = 6;

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numbSquares = 3;
  colors = generateRandomColors(numbSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i< squares.length; i++){
      if(colors[i]){
      squares[i].style.background = colors[i];
      }else{
          squares[i].style.display = "none";
      }
  }
});

hardBtn.addEventListener("click", function(){
   easyBtn.classList.remove("selected");
   hardBtn.classList.add("selected");
   numbSquares = 6;
   colors = generateRandomColors(numbSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0; i< squares.length; i++){      
      squares[i].style.background = colors[i];      
      squares[i].style.display = "block";
      }  
});

newColors.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numbSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDispay to match picked Color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i= 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});


colorDisplay.textContent = pickedColor;

// Add colors and compate to pickec color
for(var i = 0; i <squares.length; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        //compare to pickedColor
       console.log(clickedColor, pickedColor);
       var clickedColor=this.style.backgroundColor;
       console.log(clickedColor, pickedColor);
       if(clickedColor === pickedColor){
           message.textContent = "Correct!";
           newColors.textContent = "Play Again?";
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
       } else{
           this.style.background = "#232323"
            message.textContent = "Try Again"
        }       
    });
}

//change all squares to same color
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//random colors for squares
function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}


//generate random colors
function generateRandomColors(num){
    arr = []
    for(var i= 0 ; i<num; i++){
    arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}