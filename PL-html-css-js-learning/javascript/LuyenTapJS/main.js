var layer1 = document.querySelector(".layer1");
var layer2 = document.querySelector(".layer2");
var nav= document.querySelector(".fa-bars");
var menu = document.querySelector(".menu");

layer2.classList.add("hidden");

nav.onclick = function(){
    layer1.classList.toggle("hidden");
    layer2.classList.toggle("active");
    menu.classList.toggle(".doimau");
 

}


