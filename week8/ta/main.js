const btnReq = document.getElementById('req')
const btnNext = document.getElementById('next')
const btnPrev = document.getElementById('prev')
let myUrl = 'https://www.swapi.tech/api/people'

btnReq.addEventListener('click', callFunc,false)
//btnNext.addEventListener('click', callFunc2)
//btnPrev.addEventListener('click', requestFunc)


let outputDiv = document.getElementById('outPut')

function callFunc(event){
    event.preventDefault();
    requestFunc(myUrl)

}



function requestFunc(url){
    console.log("hi")
    fetch(url, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})
.then(response => {
    outputDiv.innerHTML = 'Waiting for response...';
if(response.ok) {
    console.log(response)
    return response;
}

})
.then(response => response.json())
.then(function parseFunc(strResponse){
    //let nextPage = strResponse.next
   // console.log("req1")
    let lst = []
    let strLenght = strResponse.results.length
    url = strResponse.next
    for(var i = 0; i < strLenght; i++) 
    {lst.push(strResponse.results[i].name)
        outputDiv.innerText = lst}
    //console.log(strResponse)
    
    if (!url){
      console.log("no") ;}
    else 
        btnNext.addEventListener('mousedown',(event) => {
        event.preventDefault();
        requestFunc(url)
       
       })
    


        //requestFunc(nextPage)
       // btnNext.addEventListener('mousedown',(event) => {
       // event.preventDefault();
        //    requestFunc(nextPage)},false)
        //btnNext.removeEventListener('click', requestFunc)
        //outputDiv.innerText = " "
       // btnNext.addEventListener('click',(event) => {
           // event.preventDefault();
           // requestFunc(nextPage)})
    
    //requestFunc(nextPage)  
})
.catch()
}
//function callFunc2(event){
 //   event.preventDefault();
 //   requestFunc(nextPageGlob)
//}

/*function parseResponse(url){
    var myUrl = url
    var myResp = requestFunc(myUrl);
    var myRespJson = myResp.json()
    let strLenght = myRespJson.results.length
    for(var i = 0; i < strLenght; i++) 
    {console.log(myResp.results[i].name)
}

}

/*.then(response => response.json())
.then(function parseFunc(strResponse){
    let nextPage = strResponse.next
    let strLenght = strResponse.results.length
    for(var i = 0; i < strLenght; i++) 
    { console.log(strResponse.results[i].name +'' + strResponse.results[i].gender)
}
return nextPage})*/


/*function callFunc2(){
    
    var newUrl = requestFunc2()
    console.log(newUrl)
    //requestFunc(newUrl)
}*/

/*function requestFunc2(){
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        cache: 'no-cache'
    })
    .then(response=>{if(response.ok){
        return response;
    }})
    .then(response => response.json())
    .then(response=>{
            let newUrl = response.next
            console.log(response.next)
            return newUrl
            //requestFunc(requestFunc2())
        })
}*/


