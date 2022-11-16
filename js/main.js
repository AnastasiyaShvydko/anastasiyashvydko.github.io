const myArray = [{label: 'Week01',
url: 'week1/index.html'}, {label: 'Week02',
url: 'week2/index.html'},{label: 'Week03',
url: 'week3/index.html'}, {label: 'Week04',
url: 'week4/index.html'}, {label: 'Week05',
url: 'week5/index.html'} , {label: 'Week07',
url: 'week7/index.html'}, {label: 'Week08',
url: 'week8/index.html'},{label: 'Week09',
url: 'week9/index.html'}]

function loadLinks(){
for (var i = 0; i < myArray.length; i++){
const weekNum = document.createElement("li");
const weekLink = document.createElement('a');
const url = myArray[i].url;

var OrdList = document.getElementById('link_list').appendChild(weekNum);

weekNum.style.color = "blue";
weekNum.appendChild(weekLink)
weekLink.setAttribute("href",myArray[i].url);
weekLink.innerHTML = myArray[i].label;
 
   
   



}
}