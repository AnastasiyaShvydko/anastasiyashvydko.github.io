import DictionaryController from "./DictionaryController.js"
export const form = document.getElementById("formOne")
const translate = form.translate
const showCardBtn = document.getElementById("showCardBtn")


let myDictContr = new DictionaryController("formOne","translate","def","first_language","second_language","showBtn","sayBtn","defList","showDiv","first_lang_img","second_lang_img","pos","ex","photoEl")


form.addEventListener("change", e=>{
    e.preventDefault()
    myDictContr.lang()
})
translate.addEventListener('click', start)
function start(){
    myDictContr.init() 
}

showCardBtn.addEventListener('click', showCard)
function showCard(event){
    event.preventDefault()
    myDictContr.addShowCardFunc()
}



