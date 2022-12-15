import { list } from "./localStorage.js";
import Dictionary from "./Dictionary.js";
import DictionaryView from "./DictionaryView.js";



export default class DictionaryController{
    constructor(formId,translateBtnID,parentElementId,firstLanguageId,secondLanguageId,showBtnId,sayBtnId,defListId,showDiv,firstLangImg,secondLangImg,posElement,exElement,photoEl){
        this.list = list
        this.showBtnId = showBtnId
        this.sayBtnId = sayBtnId
        this.formId = formId
        this.form = document.getElementById(this.formId)
        this.showBtn = document.getElementById(this.showBtnId)
        this.sayBtn = document.getElementById(this.sayBtnId)
        this.defListId = defListId
        this.defListElement = document.getElementById(defListId)
        this.firstLanguageId = firstLanguageId
        this.secondLanguageId = secondLanguageId
        this.showDivElement = document.getElementById(showDiv)
        this.firstLangImg = document.getElementById(firstLangImg)
        this.secondLangImg = document.getElementById(secondLangImg)
        this.posElement = document.getElementById(posElement)
        this.exElement = document.getElementById(exElement)
        this.photoElement = document.getElementById(photoEl)
    
        this.dictionary = new Dictionary();
        this.def = ""
        this.translateBtn = document.getElementById(translateBtnID)
        this.dictionaryView = new DictionaryView()
        this.parentElementId = parentElementId
        this.parentElement = document.getElementById(this.parentElementId)

    }


    lang(){
      this.dictionary.firstLang = this.form.first_language.value
      if(this.form.first_language.value == "en"){
       this.form.word.pattern = "[a-z]+"
      }
      else if(this.dictionary.firstLang == "ru"){
       this.form.word.pattern = "[а-я]+"
      }
      this.dictionary.secondLang = this.form.second_language.value
    }
   
    init(){
      this.addTranslateFunc()
    }


    // showLang(event){
    //   event.preventDefault();
    //   let firstLang = document.getElementById(this.firstLanguageId).value
    //   let secondLang = document.getElementById(this.secondLanguageId).value
    //   this.dictionaryView.chooseLang(firstLang,secondLang,this.firstLangImg,this.secondLangImg)
      
    // }


    addShowCardFunc(){
      let i = 0;
      this.dictionaryView.showCard(this.showDivElement, i)
    }

  
    //  addShowListFunc(){
    //   this.dictionaryView.showList(this.showDivElement)
    // }
    
    
    async addTranslateFunc(){
      this.newWord = this.form.word.value
      this.dictionary.form = this.form
      if(this.dictionary.firstLang != undefined & this.dictionary.firstLang != "-" & this.dictionary.secondLang != "-" & this.newWord != ""){
        this.showDivElement.innerHTML = "";
        const newDef = await this.dictionary.getInfo(this.newWord)
        if(newDef.length > 0){
          let length = newDef.length
          let myAr = []
          for(let i=0; i<length;i++){
            myAr.push(newDef[i].pos)
          }
          this.dictionaryView.renderPos(myAr,this.posElement,newDef,this.parentElement,this.newWord,this.exElement)
          await this.addPronounce(this.newWord)
          await this.addShowPicture(this.newWord)
          this.form.word.value = ""
        }
      }
      else{
        this.showDivElement.innerHTML = " "
        let alert = document.createElement("p")
        alert.innerHTML = "You didn't enter all requaired information"
        this.showDivElement.appendChild(alert)
      }
    }


   


    async addPronounce(word){
      this.url = await this.dictionary.getSound(word)
      this.audio = new Audio(this.url);
      let pronounceBtn = document.getElementById("pronounceBtn")
      if(pronounceBtn !=null){
        pronounceBtn.hidden = true
        }
      if(this.url != undefined){
        this.dictionaryView.renderPronounceBtn(this.defListElement,this.form,this.audio);
        }
      else if(pronounceBtn != null){
        pronounceBtn.innerHTML = ""
      }
    }

  

    async addShowPicture(word){
      this.url = await this.dictionary.getPhoto(word)
      if(this.url.length != 0){
        let imgLink = this.url[0].src.small;
        this.dictionaryView.showPicture(imgLink,this.photoElement)}
      }
    }