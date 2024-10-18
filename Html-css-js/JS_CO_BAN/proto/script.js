//đối tượng chung
var nguoi = {
    firstName : 'firstName',
    lastName : 'lastName',
    showName : function(){
          console.log("Name = " + this.firstName + " " + this.lastName);
    }
}

var vanTrong = {
    firstName : 'Trọng',
}

// vanTrong.__proto__ =  nguoi;
// console.log(vanTrong);

// vanTrong.showName();
// console.log(vanTrong);

var vanThuy = {
    firstName : 'Thuy',
}





//Truy cập proto của function : Khi truy cập proto của function thì phải . 2 lần proto đẻ vào 
//Còn object cần . 1 lần proto để vào 
// var test = function (){
//     console.log("Đây là bản test");
// }();




// // Khác ngôn ngữ khác -> hàm tạo trước , biến tạo sau , value của biến tạo tại vị trí khai báo giá trị biến


//kiểm tra proto
// console.log(Reflect.has(vanTrong,'firstName'));//kiểm tra xem trong biến có giá trị đó ko -> trả true/false
// console.log(Reflect.get(vanTrong,'firstName'));//lấy giá trị của biến

//edit proto
// Reflect.setPrototypeOf(vanTrong,nguoi);
Reflect.setPrototypeOf(vanTrong,nguoi);
vanTrong.showName();

