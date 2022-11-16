
/*function getNumberOne(){
     var a = Number(document.getElementById('number_1').value);
    return a;
   
}
const getNumberTwo = () =>{
    var b = Number(document.getElementById('number_2').value);
    return b;
}*/

function sumFunction(numberOne){
            
    var numberOne = Number(document.getElementById('number_1').value);
  
    var summary = 0;
    if (isNaN(numberOne)){
        document.getElementById('output_1').innerHTML = "Please enter a number";
    }
    
   else{
   // summary = parseInt(a,7);
   var b = numberOne + 1;
   for (var i = 1; i < b; i++){
         summary += i;     
 } 
 document.getElementById('output_1').innerHTML = summary; }  
}

/*function addFunction(getNumberOne,getNumberTwo){

var numberTwo = Number(getNumberTwo);
var numberOne = Number(getNumberOne);

 
 if (isNaN(numberTwo)){
    document.getElementById('output_2').innerHTML = "Please enter a number";
}
else{
    var result = numberTwo + numberOne;
    document.getElementById('output_2').innerHTML = result;
}
    
    //document.getElementById('output_2').innerHTML = getNumberOne;
}*/


const addFunction = () => {
 var numberTwo = Number(document.getElementById('number_2').value);
 var numberOne = Number(document.getElementById('number_1').value);


 if (isNaN(numberTwo)){
    document.getElementById('output_2').innerHTML = "Please enter a number";
}
else{
    var result = numberTwo + numberOne;
    document.getElementById('output_2').innerHTML = result;}
}