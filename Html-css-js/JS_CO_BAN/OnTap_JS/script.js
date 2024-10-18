const list = [
    1,
    function(a, b) {
        return a + b;
    }
]


const [value, sum] = list;
console.log("Gia tri cua sum : " + sum(2, 3));
console.log(value);

// test
console.log("Test");
const person = {
    name: 'John',
    age: 30,
    job: 'developer'
};

for (const key1 in person) {
    console.log(key1 + ': ' + person[key1]);
}

const array = [1, 2, 3, 4, 5];
for (const item of array) {
    console.log(item);
}

// Chèn chuỗi
let a = 'String text';
let b = `Test ${ a } ok `;
console.log(b);