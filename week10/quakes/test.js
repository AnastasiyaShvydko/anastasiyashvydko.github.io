function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
 async function  showInfo(){
    let show = await getJSON("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02")
    return show
}
const btn = document.getElementById('btn')
btn.addEventListener('click', sayHi)
//window.onload = showInfo()
function sayHi(event){
console.log("hi")
let myRes = showInfo()
myRes.then(
    response=>console.log(response.features[0])
)

console.log(myRes)
}