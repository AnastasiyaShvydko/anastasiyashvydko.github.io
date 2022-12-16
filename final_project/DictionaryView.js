//import { list } from "./localStorage.js";

export default class DictionaryView{
    constructor(){
        this.newAddBtn = document.createElement('div')
    }
    // renders defenition we've got from API
    renderDef(defenition,defElement,word,exElement){
        defElement.innerHTML = " "; 
        exElement.innerHTML = " ";
        if(defenition!=undefined){
           for(let i = 0; i<defenition.length; i++){
                let li = document.createElement('li')
                let p = document.createElement('p')
                let newAddBtn = document.createElement('div')
                let newDiv = document.createElement('div')
                p.innerText = defenition[i].text
                li.appendChild(p)
                li.classList.add("defLine")
                li.appendChild(newAddBtn)
                defElement.appendChild(li)
                newAddBtn.style.backgroundImage = "url('./assets/save-icon.png')"
                newAddBtn.style.backgroundSize = "20pt 20pt"
                newAddBtn.classList.add("defButton")
                newAddBtn.addEventListener('click', e => {
                    this.addToList(e.target,word)
                })
            }

        }
        let newExampleBtn = document.createElement('div')
        newExampleBtn.innerHTML = "Examples"
        newExampleBtn.classList.add("exampleButton")
        exElement.appendChild(newExampleBtn)
        newExampleBtn.addEventListener('click', e => {
            e.preventDefault()
            this.renderEx(e,defenition,exElement)
        })
    }

    //renders pronounce button
    renderPronounceBtn(element,form,audio){
        let myBtn = document.getElementById("pronounceBtn")
        if(element.parentElement.contains(myBtn)==true){
            element.parentElement.removeChild(myBtn)
        }
        let pronounceBtn = document.createElement('div')
        pronounceBtn.id = "pronounceBtn"
        element.parentElement.appendChild(pronounceBtn)
        pronounceBtn.style.backgroundImage = "url('./assets/loudspeaker1.png')";
        pronounceBtn.style.backgroundSize = "30pt 30pt"
        pronounceBtn.addEventListener("click" , e=> {
            e.preventDefault()
            audio.play()
        })

    }

    // renders Examples when event click occures 
    renderEx(e,defenition,exElement){
        exElement.innerHTML = ""
        let targetText = e.target.innerText
        let newTargetText = targetText.replace("+","")
        let newTargetText2 = newTargetText.trim()
        for (let a = 0; a<defenition.length;a++){
            if (defenition[a].ex != null){
                let p = document.createElement("p")
                p.innerHTML = "Examples"
                exElement.appendChild(p)
                p.style.backgroundColor = "#f0eae0"
                p.style.textAlign = "center"
                p.style.borderRadius = "5pt"
                let exLength = defenition[a].ex.length;
                for(let b = 0; b < exLength; b++ ){
                    let liEx = document.createElement("li")
                    liEx.innerHTML = defenition[a].ex[b].text
                    exElement.appendChild(liEx)
                }
      
            }
        }
    }
    //renders the parts of the speach we've got from Api
    renderPos(pos,posElement,defenition,defElement,word,exElement){
        posElement.innerHTML = " ";
        defElement.innerHTML = "";
        exElement.innerHTML = "";
        for(let i=0; i< pos.length; i++){
            let li = document.createElement("li")
            let text = pos[i].toUpperCase();
            li.innerHTML = pos[i]
            posElement.appendChild(li)
            li.addEventListener('click', e =>{
                e.preventDefault();
                if(defenition[i].pos== e.target.innerText){
                    this.renderDef(defenition[i].tr,defElement,word,exElement)
                }
            })
        }
    }

    //adds word and defenition into memory list which places in the local storage 
    addToList(element,word){
        let list = localStorage.getItem('words')
        if (word != null){
            let string = element.parentElement.innerText
            let newString = {'word':word, 'def': string}
            if(list == null){
                list = []
                list.push(newString)
                let newLine = JSON.stringify(list)
                localStorage.setItem('words', newLine)}
            else{
                var listJSON = JSON.parse(list)
                let newList = Array.from(listJSON)
                newList.push(newString)
                let newLine = JSON.stringify(newList)
                localStorage.setItem('words', newLine)
            }

            element.style.backgroundImage = "url('./assets/done-icon.png')";
            element.style.backgroundSize = "20pt 20pt"
            element.style.backgroundColor = "#e0f0e6"
            element.disabled = true
        }

            
    }
    
    // showCardFunction(showDiv,i){
    //     let list = localStorage.getItem('words')

    // }
    //shows card when we have more than one card in our list
    showCard(showDiv,i){
        let list = localStorage.getItem('words')
        if(list!=null){
            let listJSON = JSON.parse(list)
            this.showOneCard(showDiv,i)
            // const btn1 = document.createElement('button');
            // btn1.innerText = "<"
            // btn1.classList.add("backBtn")
            // const btn2 = document.createElement('button');
            // btn2.innerText = ">"
            // btn2.classList.add("nextBtn")
            // showDiv.appendChild(btn1)
            // showDiv.appendChild(btn2)
            if(i == 0&listJSON.length > 1){
                const btn1 = document.createElement('button');
                btn1.innerText = "<"
                btn1.classList.add("backBtn")
                const btn2 = document.createElement('button');
                btn2.innerText = ">"
                btn2.classList.add("nextBtn")
                showDiv.appendChild(btn1)
                showDiv.appendChild(btn2)
                btn1.hidden = true;
                btn2.addEventListener('click', e =>{
                    e.preventDefault()
                    i++
                    if (i <listJSON.length - 1){
                        this.showCard(showDiv,i++)
                    }
                    else{
                        this.showLastCard(showDiv,i)
                    }
            
                })
                btn1.addEventListener('click', e =>{
                    e.preventDefault()
                    if(i!=0){
                        this.showCard(showDiv,i - 1)}
                    })
                //btn2.style.marginLeft = "115%"
            }
            else if(listJSON.length == 1&i == 0 ){
                this.showOneCard(showDiv,i)
            }
            
        }
        else{
            showDiv.innerHTML = "Sorry, your Memory List is Empty!"
        }
    }

//shows card when we have just one card in the list it displays without buttons back and force
    showOneCard(showDiv,i){
        let list = localStorage.getItem('words')
        showDiv.innerHTML = " ";
        if(list!=null){
            var listJSON = JSON.parse(list)
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
            showDiv.appendChild(li)
            li.appendChild(mainDiv)
            mainDiv.appendChild(divChildFace)
            mainDiv.appendChild(divChildBack)
            divChildBack.appendChild(divChildBackContent)
            showDiv.classList.remove("cards")
            showDiv.classList.add('showCardDiv')
            const btn3 = document.createElement('button');
            btn3.innerHTML = "x"
            btn3.classList.add("closeBtn")
            showDiv.appendChild(btn3)
            btn3.addEventListener('click', e =>{
                e.preventDefault()
                showDiv.innerHTML = "";

            })
        }
        else{
            showDiv.innerHTML = "Sorry, your Memory List is Empty!"
        }

    }
    //shows last card
    showLastCard(showDiv,i){
        
        this.showOneCard(showDiv,i)
        const btn1 = document.createElement('button');
        btn1.innerText = "<"
        btn1.classList.add("backBtn")
        showDiv.appendChild(btn1)
        btn1.addEventListener('click', e =>{
            e.preventDefault()
            if(i!=0){
            this.showCard(showDiv,i - 1)}
        

        })
       
    }
   

//display picture when we've got link from the Api
    showPicture(link,element){
        let myImg = document.getElementById("imgDef")
        if(element.contains(myImg)==true){
            element.removeChild(myImg)
        }
        let img = document.createElement("img")
        img.id = "imgDef"
        element.appendChild(img)
        img.src = link;
    }
 
}



