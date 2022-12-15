import BookView from "./BookView.js"
export default class BookController{
    constructor(showDivId){
        this.showDiv = document.getElementById(showDivId)
        this.bookView = new BookView()
    }
    init(){
      this.bookView.showList(this.showDiv)
    }
    clearFunc(){
      this.bookView.clearList(this.showDiv)
    }
}