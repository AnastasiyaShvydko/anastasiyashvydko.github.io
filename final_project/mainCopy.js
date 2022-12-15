//import { getJSON } from "./utilities.js"

const apiKey = 'dict.1.1.20221119T154649Z.309cdaef0c90f0d0.fa7f14bfb09e23316849e3f318248ab4a8d6eb39'
const form = document.getElementById("formOne")
const translate = form.translate
const addToListBtn = document.getElementById("addBtn")
const showListBtn = document.getElementById("showBtn")
const showDiv = document.getElementById("showDiv")


console.log(word)
translate.addEventListener('click', renderInfo)
addToListBtn.addEventListener('click', addToList)
showListBtn.addEventListener('click', showList) 

function getLang(){
    let Lang = " ";
    let rusLang = document.getElementById("ru-en")
    let enLang = document.getElementById("en-ru")
    if(rusLang.checked == true){
        Lang = rusLang.value
        form.word.pattern = "[а-я]"
    }
    else{
        Lang = enLang.value
        form.word.pattern = "[a-zA-Z]"
    }
    console.log(form.word.pattern)
    return Lang;
}

async function renderInfo(event){
let myDef = document.getElementById('def')
myDef.innerHTML = " ";   
const currentLang = getLang();
//event.preventDefault()
let word = form.word.value
if(word!=null){

let def = await getJSON(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=${currentLang}&text=${word}`)
//let def = await getJSON("https://od-api.oxforddictionaries.com/api/v2/entries/ru-en/рука")
//let def = await getJSON("https://api.dictionaryapi.dev/api/v2/entries/en/dog")
console.log(def)
let fullDef = [];
if(def!=undefined){
for(let i = 0; i<def.length; i++){
    let li = document.createElement('li')
    let newAddBtn = document.createElement('div')
    li.innerHTML = def[i].text
    li.classList.add("defLine")
    li.appendChild(newAddBtn)
    myDef.appendChild(li)

    
    newAddBtn.innerHTML = "TEACH"
    newAddBtn.classList.add("defButton")
    newAddBtn.addEventListener('click',addToList )
   // fullDef.push(def[i].text)
   // myDef.innerText = fullDef
    console.log(fullDef)
}
}
}



}

function addToList(event){
    event.preventDefault()
    let newWord = form.word.value
    console.log(newWord)
    if (newWord != null){
    var list = localStorage.getItem('words')
    console.log(list)
   // let myDef = document.getElementById('def').innerHTML

   let string = event.target.parentElement.innerText
   console.log(string)
   //string.replace("+","A")
   let btnText = event.target.innerText
   let addDef = string.replace(btnText," ")
    if(list == null){
        list = []}
    var listJSON = JSON.parse(list)
    
    console.log(listJSON)
let newString = {'word':newWord, 'def': addDef}
   let newList = Array.from(listJSON)
   newList.push(newString)
  
   let newLine = JSON.stringify(newList)
   //let newAr = Array.from(newLine)

    localStorage.setItem('words', newLine)
    //form.word.value = " ";
}
}


function showList(event){
   showDiv.innerHTML = " ";

    event.preventDefault()
    
    var list = localStorage.getItem('words')
    var listJSON = JSON.parse(list)
    for(let i = 1; i < listJSON.length ; i++)
    {  const li = document.createElement('li');
    const mainDiv = document.createElement('div');
    const divChildFace = document.createElement('div');
    const divChildBack= document.createElement('div');
    const divChildBackContent= document.createElement('div');
    //li.classList.add("face")
    mainDiv.classList.add("center")
    mainDiv.classList.add("card")
    //li.classList.add("unmove")
    //divChild.classList.add("move")
   // li.addEventListener('click', changeSide)
    divChildBackContent.innerHTML = listJSON[i].def
    divChildFace.innerHTML = listJSON[i].word
    divChildBack.classList.add("back")
    divChildFace.classList.add("face")
    divChildBackContent.classList.add("center")
    //divChild.classList.remove("move")
        
    showDiv.appendChild(li)
    li.appendChild(mainDiv)
    mainDiv.appendChild(divChildFace)
    mainDiv.appendChild(divChildBack)
    divChildBack.appendChild(divChildBackContent)
}
   //console.log(listJSON)
    
}
function changeSide(event){
    if(event.target.classList == "face"){
        event.target.classList.remove("face")
        event.target.classList.add("back")
        showDefenition(event.target)

    }
    else{
        event.target.classList.remove("back")
        event.target.classList.add("face")
        showWord(event.target)

    }
}

function showDefenition(element){
    var list = localStorage.getItem('words')
    var listJSON = JSON.parse(list)
    for(let i = 1; i < listJSON.length ; i++){
    if(element.innerHTML == listJSON[i].word){
        element.innerHTML = listJSON[i].def
    }}
}
function showWord(element){
    var list = localStorage.getItem('words')
    var listJSON = JSON.parse(list)
    for(let i = 1; i < listJSON.length ; i++){
    if(element.innerHTML == listJSON[i].def){
        element.innerHTML = listJSON[i].word
    }}
}

//аотоиарыивгарцьшуаоцловьгштанвпуа
//print(привет)
//мама привет от тёмы и антона 