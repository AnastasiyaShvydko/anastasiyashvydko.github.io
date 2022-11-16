function drawPattern(){
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
//context.strokeStyle = "green";




    var img = new Image();
    img.src = "../bike.png";
    img.onload = function() {
    var pattern = context.createPattern(img, "repeat"); 
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);             
    };
}


drawPattern()