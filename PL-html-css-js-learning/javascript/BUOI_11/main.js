// bắt đổi tượng sử dụng thẻ 
//khi bắt đối tượng nhiều phần tử => mảng 
//bắt đối tượng thẻ
var td = document.getElementsByTagName('h1');
console.log(td);
console.log(td[0].innerHTML);//lấy nội dung
td[0].innerHTML = "Văn trọng"
//
var btn = document.getElementsByTagName("h4");

for(var i = 0 ; i<btn.length;i++){
    btn[i].innerHTML = '<div class="btn btn-primary">Click</div>'
}

//bắt đối tượng id => ko phải mảng vì id là duy nhất
var td2 =document.getElementById("td2");
console.log("id : "+ td2.innerHTML);

//bắt đối tượng là class
var tieude = document.getElementsByClassName("card-title");
console.log(tieude);

//bắt phần tử đầu tiên trong tập hợp không phân biệt thẻ hay class
var td1 = document.querySelector("h1");
console.log(td1);

//bắt đối tượng trả về tất cả các kết quả tìm thấy class hoặc thẻ => nếu sài class phải . 
var n = document.querySelectorAll("h1");
var m = document.querySelectorAll(".card-title");

//hàm xử lý giao diện 
var btn_nut = document.querySelectorAll(".nut")
//xóa background
btn_nut[1].classList.remove('btn-info')
// hàm add background
btn_nut[1].classList.add('btn-danger')
//nếu do mik tự tạo tự add class
btn_nut[2].classList.add("kichthuoc")
//hàm toggle => tương ưng với remove có sẽ xóa , không có thì thêm vào
btn_nut[0].classList.toggle("btn-info")
btn_nut[0].classList.toggle("btn-warning")



//hàm xử lý sự kiện : click
var khoi = document.querySelector(".khoi");
var x = 0 ; 
btn_nut[0].onclick = function(){
    khoi.classList.toggle("dichuyen");
}

//doi mau nut 
btn_nut[2].onclick = function(){
    btn_nut[2].classList.toggle("mau");
}









