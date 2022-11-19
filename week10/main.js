async function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response}
                
            
        })
        .then(response=> {return response.json()})
        .then(response => {console.log(response)})
        .catch(function(error) {
            console.log(error);
        });
}
const apiKey = 'dict.1.1.20221119T154649Z.309cdaef0c90f0d0.fa7f14bfb09e23316849e3f318248ab4a8d6eb39'
const form = document.getElementById("formOne")
let btn = form.button

console.log(word)
btn.addEventListener('click', renderInfo)



async function renderInfo(event){
event.preventDefault()
let word = form.word.value
let def = await getJSON(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=ru-ru&text=деревянный`)
//let def = await getJSON("https://od-api.oxforddictionaries.com/api/v2/entries/ru-en/рука")
//let myDef = document.getElementById('def')
//myDef.innerText = def
console.log(word)
}
