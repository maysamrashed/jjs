var Frontend = document.querySelector("div");
var Sizebig = document.querySelector(".big");
var Sizesmall = document.querySelector(".small");
function changeSize(){
    Frontend.classList.add("size");
}
function changeSizesmall(){
    Frontend.classList.remove("size");
}
Sizebig.onclick = changeSize;
Sizesmall.onclick = changeSizesmall;