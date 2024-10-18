// function findNumber(numbers) {
//     return function(func) {
//         const result = []; //0 , 2 , 4 , 6 ,8 , 10
//         for (let i = 0; i <= numbers; i++) {
//             if (func(i) == true) {
//                 result.push(i); //
//             }
//         }
//         return result;
//     }
// }

const findNumber = (numbers) => (func) => {
    const result = []; //0 , 2 , 4 , 6 ,8 , 10
    for (let i = 0; i <= numbers; i++) {
        if (func(i) == true) {
            result.push(i); //
        }
    }
    return result;
}
const value = findNumber(10)((num) => num % 2 === 0);
console.log(value);

console.log('---------------');
const nums = [1, 2, 4, 7, 8];

const callback = (value, index) => {
    console.log(`STT thu ${index} là ${value}`);
}


nums.forEach(callback);