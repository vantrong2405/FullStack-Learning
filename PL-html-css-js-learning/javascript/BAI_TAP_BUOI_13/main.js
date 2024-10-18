// var bieutuong = document.querySelectorAll(".bieutuong");
// var nd = document.querySelectorAll(".noidung");
// console.log("ok: "+nd.classList);
// for (let i = 0; i < bieutuong.length; i++) {
//     bieutuong[i].onclick = function(){
//         this.classList.toggle("iconxanh");
//         if(this.classList[1] == "iconxanh"){
//             this.classList.remove("iconxanh");
//             var ndhienthi = this.getAttribute("data-click");
//             var doituong = document.getElementById(ndhienthi);
//             doituong.classList.remove("active");
            
//         }else{
//             for(let i = 0 ; i<bieutuong.length;i++){
//                 bieutuong[i].classList.remove("iconxanh");
//             }
            
//             for(let i = 0 ; i<nd.length;i++){
//                 nd[i].classList.remove("active");
//             }
//             //add mau xanh cho icon dc click
//             bieutuong.classList.toggle("iconxanh");
//             //add noidung
//             nd.classList.toggle("active");
//             var ndhienthi = this.getAttribute("data-click");
//             var doituong = document.getElementById(ndhienthi);
//             doituong.classList.toggle("active");
//         }
//     }
// }

let bieutuong = document.querySelectorAll('.bieutuong');
let nd =document.querySelectorAll('.noidung')
for (let i = 0; i < bieutuong.length; i++) {
    bieutuong[i].onclick = function () {
        // this.classList.toggle('iconxanh');
        if (this.classList[i] == 'iconxanh') {
            this.classList.remove('iconxanh');
            var ndhienthi = this.getAttribute('data-click');
            var dt = document.getElementById(ndhienthi);
            dt.classList.remove('active');
        }
        else{
            for (let i = 0; i < bieutuong.length; i++) {
                
                bieutuong[i].classList.remove('iconxanh');
                         
            }
            // add mau xanh cho icon dc click
            this.classList.toggle('iconxanh');
            //an tat ca noi dung
            for (let i = 0; i < nd.length; i++) {
                nd[i].classList.remove('active');
                
            }
            //hien ra noi dung doi tuong duoc click
            var ndhienthi = this.getAttribute('data-click');
            var dt = document.getElementById(ndhienthi);
            dt.classList.toggle ('active');
        }

    }
    
}

// // thực hiện chức năng ẩn hiện mât khẩu
// var eyeOpen = document.querySelector(".eye-open");
// var eyeOclose = document.querySelector('eye-close');
// var txtMk = document.querySelector(".txt-mk");
// //ẩn đối tượng open
// eyeOpen.classList.remove("fa-eye");

// eyeOclose.onclick =function(){
//    this.classList.remove("fa-eye-slash");
//     eyeOpen.classList.add("fa-eye");
//     // set thuộc tính và giá trị của thuộc tính đó
//     txtMk.setAttribute("type","text");//đổi thuộc tính type thành có giá trị text => tyle có giá trị là text
// }

// eyeOpen.onclick = function(){
//     this.classList.remove("fa-eye");
//     eyeOclose.classList.add("fa-eye-slash");
//     txtMk.setAttribute("type","passwork");//đổi thuộc tính type thành có giá trị text => tyle có giá trị là text
// }

var eyeOpen=document.querySelector('.eye-open');
var eyeClose=document.querySelector('.eye-close');
var txtMk=document.querySelector('.txt-mk');
    eyeOpen.classList.remove('fa-eye');

    eyeClose.onclick =function(){
        this.classList.remove('fa-eye-slash');
        eyeOpen.classList.add('fa-eye');
        txtMk.setAttribute("type","text")
    }
    eyeOpen.onclick=function(){
        this.classList.remove('fa-eye');
        eyeClose.classList.add('fa-eye-slash')
        txtMk.setAttribute("type","password")

    }

    // chức nẳng ẩn hiện giao diện đăng nhập khi click
    var nutdn = document.querySelector(".dn");
    var dangnhap = document.querySelector(".dangnhap");
    var btn_dn = document.querySelector(".btn-dn");
    nutdn.onclick = function(){
        dangnhap.classList.add("hiendn");
    }

    btn_dn.onclick = function(){
        dangnhap.classList.remove("hiendn");
    }
   





