var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha noi , Vn',
    phone: '0128382',
    getName: function () {
        return this.name;
    }
}


//them email
// myInfo.emailvantrong = 'vantrong@gmail.com';
//hoac
myInfo['email-vantrong'] = 'Vantrongdz@gmail.com';

var myKey = "address";
console.log(myInfo);
//value : 
//c1
//xoa value 
delete myInfo.age;
console.log("Value1 : " + myInfo.name);
//c2
console.log("Value2 : " + myInfo['name']);

console.log("Address : " + myInfo[myKey]);

console.log(myInfo.getName());

