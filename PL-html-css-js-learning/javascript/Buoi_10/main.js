// document.write("Xin chào")
// // So sánh đồng nhất : === => so sánh vừa giá trị vừa kiểu dữ liệu
//  var n = 1 , m = '1';
//  if(n  === m ){
//     document.write("Bằng");
//  }else{
//     document.write("Không bằng");
//  }
// alert("abc");
//  console.log("ok");
//DÙng F12 để kiểm tra web lấy phần tử
var n = 1 ; 
console.log(n+5);
console.log(n+"abc");
//hàm
function test(){
    alert("thông báo");
}

//mảng
var M=["xoài","ổi","mận"];
console.log(M.length);
//truy xuất phần tử 
console.log(M[0]);

//thêm phần tử vào cuối mảng 
M.push("Mít");
console.log(M);//thêm vào cuối mảng 

//THêm phần tử vào đầu mảng 
M.unshift("sầu riêng");
console.log(M);

//Xóa phần tử cuối mảng
M.pop();
console.log(M);

//Xóa phần tử đầu mảng 
M.shift();
console.log(M);

//tìm phần tử ra vị trí 1 - ngược lại -1
var viTri = M.indexOf("ổi");
console.log(viTri);

//kiểu chuỗi 
var x = "Diện thoại iphone";
console.log(x.length);

var viTri1 = x.indexOf("iphone");
console.log(viTri1);

//thay thế chuỗi
var x = x.replace("iphone" ,"samsung");
console.log(x);

//tách chuỗi thanh mảng : split
var z = "một hai ba bốn";
var mangZ = z.split(" ");//dieu giong nhau can tach
console.log(mangZ[2]);

//hàm xử lý số 
var a = 4;
console.log(a + 5);
//toString() => đổi số thành ký tự
a = a.toString();//hàm đổi số thành ký tự
console.log(a+5);
//hàm Number()=> đổi ký tự thành số
var b = '3';
console.log(b+5);
b = Number(b);
console.log(b+5);

//hàm và gọi hàm 
function dienTich(rong , dai){
       return rong * dai ;
}

document.write(dienTich(9,3));
console.log(dienTich(5,15));

//hàm vô danh
var tbc = function(n1 , n2){
    return ((n1 + n2)/2) ; 
}

console.log(tbc(5,2));

//cách viết gọn hàm vô dánh ( arrow function);
var tbc2 =(n1 , n2)=>{
    return ((n1 + n2)/2) ; 
}

//viết gọn =>
//var abc=()=>{return};

var xyz

() =>{}

