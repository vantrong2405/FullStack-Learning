var numbers = [1, 8, 9, 2, 11, 99, 0, 2];

var sayHi = function(hello, hi) {
    console.log("Trong" + " " +
        hello + " " + hi);
}

sayHi('hello', 'you');

// arrow function
console.log("arrow function");
// var sayHi1 = (hello, hi) => {
//     console.log("Trong" + " " +
//         hello + " " + hi);
// }

// sayHi1('arr', 'arr1')

var sayHi1 = (hello, hello1) => {
    console.log('Trong' + " " + hello + " " + hello1);
}

sayHi1('ok', 'ok1');

// Duyệt mảng bằng arrow function
numbers.forEach(i => console.log(i));
numbers.forEach((i) => {
        document.write(i + "\n");
    })
    // i là giá trị biến dùng để duyệt qua numbers có thể thay bằng từ khác