
let menulist =document.getElementById("menulist")
let carouselExampleCaptions = document.getElementById("carouselExampleCaptions")
menulist.style.maxHeight = "0px";

function toggleManu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "300px";
    }else{
        menulist.style.maxHeight = "0px"
    }
}
function handleMediaQueryChange(e){
    if(e.matchMedia){
        menulist.style.maxHeight = "0px"
        carouselExampleCaptions.style.to = "0%"
    }
}
let mediaQuery = window.matchMedia("(min-width:768px)")

mediaQuery.addEventListener('change',handleMediaQueryChange)

handleMediaQueryChange(mediaQuery)