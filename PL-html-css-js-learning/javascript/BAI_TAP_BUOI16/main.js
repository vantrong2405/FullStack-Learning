var menu = document.querySelector(".menu");
var nut = document.querySelector(".nuttop");
window.addEventListener("scroll",function(){
    if(this.window.pageYOffset>100){
        menu.classList.add('doimenu');
        nut.classList.add("hientop");
    }else{
        menu.classList.remove('doimenu');
        nut.classList.remove("hientop");
    }
})




