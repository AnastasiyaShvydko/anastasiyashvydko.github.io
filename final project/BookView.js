import { list } from "./localStorage.js";

export default class BookView{
    showList(showDiv){
        if(list!= null){
            this.showDiv = showDiv
            var listJSON = JSON.parse(list)
            for(let i = 0; i < listJSON.length ; i++){  
                const li = document.createElement('li');
                const mainDiv = document.createElement('div');
                const divChildFace = document.createElement('div');
                const divChildBack= document.createElement('div');
                const divChildBackContent= document.createElement('div');
                mainDiv.classList.add("center")
                mainDiv.classList.add("card")
                divChildBackContent.innerHTML = listJSON[i].def
                divChildFace.innerHTML = listJSON[i].word
                divChildBack.classList.add("back")
                divChildFace.classList.add("face")
                divChildBackContent.classList.add("center")
                this.showDiv.appendChild(li)
                li.appendChild(mainDiv)
                mainDiv.appendChild(divChildFace)
                mainDiv.appendChild(divChildBack)
                divChildBack.appendChild(divChildBackContent)
            }
        }
        else{
            showDiv.innerHTML = "Sorry, your Memory List is Empty!"
            showDiv.style.display = "block"
            showDiv.style.textAlign = "center"
        }
    }


    clearList(element){
        element.innerHTML = ""
        localStorage.clear()
        }
    }