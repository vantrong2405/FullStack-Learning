//giá trị var toàn cục , left cục bộ
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
var section = document.querySelectorAll("section");
for (let index = 0; index <section.length; index++) {
    section[index].onclick =function(){
        menu.classList.remove("fa-times");
       navbar.classList.remove("active");
    }
    console.log(section);
}
menu.onclick = function(){
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    
}




