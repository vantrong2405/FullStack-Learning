/*
1) Math.PI
2) Math.round()//lam tron tren duoi 0.5
3) Math.abs() 
4) Math.ceil() //lam tron tren
5) Math.floor() //lam tron duoi
6) Math.random() * x  (x la so ) ( gia tri tu 0 -> x-1)
7)Math.min()
8) Math.max() 
*/

console.log(Math.round(3.5));
console.log(Math.abs(-4));
console.log("Ceil : " + Math.ceil(4.2));
console.log("Floor : " + Math.floor(4.9));
console.log("Random : " + Math.floor((1 + Math.random() * 10))); //gia tri tu 0 -> 9
var random = Math.floor(Math.random() * 4);
var bonus = [
    '10 coins',
    '20 coins',
    '30 coins',
    '40 coins',
];

console.log(bonus[random]);

console.log("max : " + Math.max(1, 2, 3));
console.log("Min : " + Math.min(7, -6, -2));