const btnNext = document.getElementById('next')
btnNext.addEventListener("click",get_request2)

const btnPrev = document.getElementById('prev')
btnPrev.addEventListener("click",get_request3)
const outputDiv = document.getElementById('outPut')
let myUrl = 'https://www.swapi.tech/api/people';
let myUrl2 = myUrl;
window.onload = get_request(myUrl)

function get_request(url){
    console.log(url);
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        cache: 'no-cache'
    })
    .then(response => {
       // outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {console.log(response)
            return response;}
        })
        .then(response => response.json())

        .then(response => {showList(response)
        console.log(response)
        myUrl = response.next
        myUrl2 = response.previous
    })
        //.then(response => {myUrl = response})
        
}

function get_request2(){
    get_request(myUrl);
}
function get_request3(){
    if(!myUrl2){
        alert("there is no prev page")
    }
    else{
    get_request(myUrl2);}
}


function showList(strResponse){ 
    let lst = []
    let strLenght = strResponse.results.length
    url = strResponse.next
    for(var i = 0; i < strLenght; i++) 
    {//lst.push(strResponse.results[i].name)
        const li = document.createElement('li');
        const a = document.createElement('a');
        const div = document.createElement('div');
        div.id = "details"
        li.id = "people"
        a.innerText = strResponse.results[i].name;
        div.innerHTML = "";
        div.style.visibility = "hidden";
        div.style.height = "0"
        //a.href = strResponse.results[i].url;
        console.log()
        outputDiv.appendChild(li);
        li.appendChild(a);
        li.appendChild(div)

        li.addEventListener("click", showDetailes)
       /fetch(strResponse.results[i].url,{
        method: 'GET',
        mode: 'cors',
       redirect: 'follow',
        cache: 'no-cache'
        })
        .then(response=>response.json())
        .then(response=>{div.innerHTML = `Height: ${response.result.properties.height} <br> Mass: ${response.result.properties.mass} 
        <br> Eye Color: ${response.result.properties.eye_color}<br> Skin color: ${response.result.properties.skin_color}`;
        console.log(response.result.properties)})
        //const newRespJ = newResp.json();
        

       function showDetailes(){
       // div.innerHTML = newRespJ.result.properties;   
       div.style.visibility = "visible";
       div.style.height = "auto"
       }
        if(a == true){
            alert("ok")
        }
        //outputDiv.innerText = lst
    }
}
