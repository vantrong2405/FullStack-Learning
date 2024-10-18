// // //hàm thường Promise
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         const issucces = true;
//         if (issucces) {
//             const data = 'is data';
//             resolve(data);
//         } else {
//             const data = 'is data';
//             reject(data);
//         }
//     });
// }

// fetchData().then((result) => {
//     console.log(result);
// })

// //arrow function Promise
// const fetchData1 = () => new Promise((resolve, reject) => {
//     const issucces = true;
//     if (issucces) {
//         const data = 'is data';
//         resolve(data);
//     } else {
//         const data = 'is not data';
//         reject(data);
//     }
// });

// fetchData1().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

// await/ async
/*
    Lưu ý : await chỉ sử dụng được trong một  hàm async 
    Await chỉ sử dụng khi đi kèm với 1 promise
*/

// Promise
const promi = () => new Promise((resolve, reject) => {
    const issucces = true;
    if (issucces) {
        const data = 'is data';
        resolve(data);
    } else {
        const data = 'is not data';
        reject(data);
    }
});


// async , await
(async() => {
    try {
        const value = await promi();
        console.log(value);
    } catch (error) {
        console.warn(error);
    }
})();