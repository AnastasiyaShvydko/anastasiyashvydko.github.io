const board = document.getElementsByClassName('board');
const block = document.getElementsByClassName('block');
const reset = document.getElementById('reset');


let touchNumber = 0;
for (element of board){
    element.addEventListener('click', drawFigure);
}

function drawFigure(event){
if (event.target.innerHTML == ""){
if (touchNumber == 0 | touchNumber%2 == 0){
event.target.innerHTML = "X";
}
else {
    event.target.innerHTML = "O"; 
    
}
touchNumber += 1;
}
}
function resetBoard(){
    for (everyDiv of block ){
        everyDiv.innerHTML = "";
        touchNumber = 0;
    }
}
reset.addEventListener('click', resetBoard)
