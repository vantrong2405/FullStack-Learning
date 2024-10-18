var languages = [
    'html',
    'js',
    'ruby',
    'C++',
]
//chuyen array sang string
console.log(languages.toString());

//khoang cach join
console.log("Join : " + languages.join(" - "));
//pop tra ve phan tu cuoi cung và xóa nó
console.log("POP : " + languages.pop());
console.log(languages);

//push : trả về độ dài của mạng và thêm vào cuối mảng
console.log("Push : " + languages.push("Java"));
console.log(languages);

//shift : xóa phần tử đầu mảng và trả về phần tử đầu mảng 
var languages2 = [
    "javascript",
    "PHP",
    "Ruby"
]

// console.log("Shift : " + languages2.shift());
// console.log(languages2);

// //unshift them phần tử đầu mảng và trả về độ dài của mảng
// console.log("unshift : " + languages2.unshift("java"));
// console.log(languages2)
//splice xoa mang co the them mang neu truyen tham so slice(tham so , tham so , "ten muon them")
languages2.splice(1, 2, "Dart");
console.log(languages2);
//concat noi mang 
console.log(languages.concat(languages2))

//slice cat mang 
console.log(languages2.slice(0, 1));//cat phan tu dau tien cuar mang javascript 