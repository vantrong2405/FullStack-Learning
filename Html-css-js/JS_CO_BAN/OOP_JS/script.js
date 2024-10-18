//đối tượng chung
var nguoi = {
    firstName : 'firstName',
    lastName : 'lastName',
    showName : function(){
          document.write("Name = " + this.firstName + " " + this.lastName);
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

// vanThuy.__proto__ =  vanTrong;
// vanThuy.showName();
// console.log(vanThuy);

// // Khác ngôn ngữ khác -> hàm tạo trước , biến tạo sau , value của biến tạo tại vị trí khai báo giá trị biến

// var hello ;
// showMy();
// hello = 'ok1'
// function showMy(){
//     console.log('Trong dep trai');
// }

//kiểm tra proto
console.log(Reflect.has(vanTrong,'firstName'));//kiểm tra xem trong biến có giá trị đó ko -> trả true/false
console.log(Reflect.get(vanTrong,'firstName'));//lấy giá trị của biến

//edit proto
Reflect.setPrototypeOf(vanTrong,nguoi);
console.log(vanTrong);
