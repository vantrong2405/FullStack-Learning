//1 bắt đối tượng
var bieutuong = document.querySelector(".bieutuong");
var nd = document.querySelector(".noidung")
//2, viết sự kiện
bieutuong.onclick = function(){
    nd.classList.toggle("active");
}