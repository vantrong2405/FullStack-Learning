
var cources = [
    {
        id: 1,
        name: "Javascript",
        coin: 100
    },
    {
        id: 2,
        name: "html,css",
        coin: 200
    },
    {
        id: 3,
        name: "C/C++",
        coin: 300
    },
    {
        id: 4,
        name: "C/C++",
        coin: 400
    },
    {
        id: 5,
        name: "Ruby",
        coin: 500
    }
];
// var sum = 0;
// for (var value of cources) {
//     sum = sum + value.coin;
// }
// console.log(sum);
var i = 0;
function tutolHandles(accmulator, currentValue, currentIndex, origiArray) {//bien tich tru , gia tri hien tai , mang voi cources mang hien tai
    i = i + 1;
    console.table({
        "Lượt chạy : ": i,
        "Biến tích trữ : ": accmulator,
        "Giá trị khóa học : ": currentValue.coin,
        "index hiện tại : ": currentIndex,
        "Tích trữ được : ": accmulator + currentValue.coin
    });
    return accmulator + currentValue.coin;//accmulator
}
var tutol = cources.reduce(tutolHandles, 0);//tham so thu 2 la gia tri khoi tao accmulator

console.log(tutol);








