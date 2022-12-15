import BookController from "./BookController.js"

const clearBtn = document.getElementById("clearBtn");
const newBook = new BookController("showDiv");
newBook.init()

clearBtn.addEventListener('click', clear)
function clear(event){
    event.preventDefault()
    newBook.clearFunc()
}
