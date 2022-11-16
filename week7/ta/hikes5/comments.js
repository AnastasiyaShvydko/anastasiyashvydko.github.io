const form = document.forms[0];
const btnAdd = document.getElementById('btnAdd')
let allComments =[]
let parent = document.getElementById('list')

//window.onload = showList()
class Comment{

}

function addEvent(){
    btnAdd.addEventListener('click',addToList,false )
}


function addToList(event){
    console.log("hi2")
    event.preventDefault();
   

    aCompleteComment  = {type: "hike" , content :form.content.value }
    
     allComments.push(aCompleteComment)
     var allCommentsString = JSON.stringify(allComments) 
     localStorage.setItem('hike', allCommentsString)
     showList()
}
function getList(){
    console.log("hi")

   
    let storedCommentString = localStorage.getItem('hike');
    allComments = JSON.parse(storedCommentString);
   
    
          
            
    
}

function showList(){

    console.log("hi3")
    console.log(allComments)
   parent.innerHTML = ''

    var numberOfTask = allComments.length
        for (var i = 0; i < numberOfTask; i++) {
            let aComment = allComments[i]
            const li = document.createElement('li');
            li.innerHTML = aComment.content;
            parent.appendChild(li);
}
}

addEvent()










/*'use strict'
const form = document.forms[0];

class Item {
    constructor(name) {
        this.name = name;
    }
}
const controller = {
    watch(form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from being submitted
        this.add(form.name.value);
        }, false);
    },

    add(name) {
        const item = new Item(name);
        view.render(item);
    }
};
const view = {
    render(item) {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        li.innerHTML = item.name;
        list.appendChild(li);
        // reset the input field
        form.name.value = '';
    }
};
controller.watch(form);*/