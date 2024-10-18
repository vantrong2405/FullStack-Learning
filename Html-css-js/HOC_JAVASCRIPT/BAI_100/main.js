//for of / dung de duyet qua mang 

var myArr = [
    'Javascript',
    'html',
    'css'
]

var myString = "Javascript";

var myObject = {
    name: "Doan vo van trong",
    age: 18
}

console.log(Object.keys(myObject));



for (var value of myArr) {
    console.log("Array : " + value);
}

for (var value of myString) {
    console.log("String : " + value);
}

for (var value of Object.keys(myObject)) {
    console.log("Object : " + myObject[value]);
}

console.log(myObject);