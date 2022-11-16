
const form = document.getElementsByClassName('form')
let nameComment = form.name
const allComments = []
export default class Comments {
constructor(elementId){
    this.parentElement = document.getElementById(elementId);

}
getAllComments() {
    let allComments = [];
    return allComments;
  }
  showComments() {
    this.parentElement.innerHTML = '';
    // notice that we use our getter above to grab the list instead of getting it directly...this makes it easier on us if our data source changes...
    renderCommentList(this.parentElement);
    if(this.parentElement != null){
    addCommentsListener()}
    //this.addHikeListener();
    // make sure the back button is hidden
    //this.backButton.classList.add('hidden');
    //controller.watch(form)
  }

}


function renderCommentList(parent){
    console.log("hi")
    let storedCommentString = localStorage.getItem('hike');
    let allComments = JSON.parse(storedCommentString);
    if (allComments != null){
    var numberOfTask = allComments.length
        for (var i = 0; i < numberOfTask; i++) {
            let aComment = allComments[i]
            parent.innerHTML = aComment.name + aComment.content
    }
}
}



    function addCommentsListener(){
        let submit = document.getElementsByClassName('submit');
        let submitArray = Array.from(submit);
        submitArray.forEach(element => element.addEventListener("click", addComment))
    }
    function addComment(){
        let aCompleteComment = {};
        aCompleteTask  = {type: "hike" , date: item.date,name:item.name, content :item.content }
        if(allComments == null){
            allComments = [] }
     allComments.push(aCompleteComment)
     var allCommentsString = JSON.stringify(allComments) 
     localStorage.setItem('hike', allCommentsString)
    }
    


const controller = {
    watch(form){
        let submit = document.getElementById('submit')
        submit.click = this.add(document.getElementById('name').value, document.getElementById('name').value);
       // submit.addEventListener('submit', (event) => {
           // event.preventDefault(); // prevent the form from being submitted
            //this.add(form.name.value, form.content.value);

           // }, false);
    },
    add(name,content) {
        const item = new Comment(name,content);
       // let allComments = document.getElementById('comments')
        let aCompleteComment = {};
        aCompleteTask  = {type: "hike" , date: new Date(),name: name, content :content }
        if(allComments == null){
            allComments = [] }
     allComments.push(aCompleteComment)
     var allCommentsString = JSON.stringify(allComments) 
     localStorage.setItem('time', allCommentsString)

        view.render(item);
    }
}

const view = {
    render(item) {
       



        const list = document.getElementById('commentList');
        const li = document.createElement('li');
        li.innerHTML = item.name + item.content;
        list.appendChild(li);
        // reset the input field
        form.name.value = '';
        form.content.value = '';
    }
}



/*const controller = {
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
}; */