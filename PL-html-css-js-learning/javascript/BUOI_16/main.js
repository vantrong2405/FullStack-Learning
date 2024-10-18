//scroll : lăn chuột
// window.addEventListener("scroll",function(){
//     // sự kiênh lăn chuột bắt vị trí X; ngang , Y: dọc
//     console.log(window.pageYOffset);
// if(window.pageYOffset >150){
//         console.log("vi trí lớn hơn 150px");
//     }
// })
var menu = document.querySelector(".menu");
window.addEventListener("scroll",function(){
    // sự kiênh lăn chuột bắt vị trí X; ngang , Y: dọc
    if(this.window.pageYOffset>150){
        menu.classList.add("codinh");
    }else if(this.window.pageYOffset<150){
        menu.classList.remove("codinh");
    }

})