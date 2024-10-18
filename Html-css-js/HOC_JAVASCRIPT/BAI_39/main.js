/* 
   1) NaN
   2) Null
   3) ''
   4) 0
   5) underfine
   6) false
*/

// var check = "A" && null && "B" && NaN && "C";
// console.log("Check", check);
// if (check) {
//     console.log("Dieu kien dung");
// } else {
//     console.log("Dieu kien sai ");
// }

var check = undefined || false || null || 0 || NaN || "";
console.log("Check", check);
if (check) {
    console.log("Dieu kien dung");
} else {
    console.log("Dieu kien sai ");
}

//no k co dieu kien sai