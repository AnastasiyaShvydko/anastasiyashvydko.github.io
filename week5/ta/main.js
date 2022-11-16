import Hikes from "./hikes.js";

const myHike = new Hikes('hikes');
//document.getElementById('hikes').addEventListener("load",() => {myHike.showHikeList()});
//window.addEventListener("load",() => {myHike.showHikeList()});

myHike.showHikeList()
myHike.addHikeListener()