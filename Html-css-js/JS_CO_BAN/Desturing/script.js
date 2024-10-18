var iphones = ['iphone1', 'iphone2', 'iphone3'];
var samsungs = ['samsungJ1', 'samsungJ2', 'samsungJ3', 'samsungJ16'];
// var change = iphones;//Tro den bo nho iphone nen (iphone va change la 1 dia chi)
// change[1] = 'apple';// gia tri iphones bi tham chieu thay doi theo khi change thay doi gia tri  
//Neu muon tao doc lap change moi thi dung slice()

// console.log(change);
// console.log('-------------');
// console.log(iphones);

var arr = [...iphones, 'Galaxy', ...samsungs, 'GalaxySX'];
arr[1] = 'IphoneSxMax';
console.log(arr);

//Mảng
console.log("Giá trị của mảng ");
var arrays = [2, 4, 7, 9, 12, 2];

function sum() {
    //value nay la cua doi so 
    let total = 0;
    for (const value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum(...arrays));

function caculatGPA(math, second, ...rest) {
    return ((math * 2) + (second * 1.5) / sum(...rest));
}

console.log("Gias tri cua GPA : " + caculatGPA(10, 8, ...arrays));

//Mang ky tu
const vietNam = [
    "Nguyen Huu Thang",
    "Nguyen Cong Phuong",
    "Tran Van Quyet",
    "Tan Van De",
    "Tuan Huu van",
]

var [coach, address, ...rest1] = vietNam;
console.log([...
    'nivika'
]);