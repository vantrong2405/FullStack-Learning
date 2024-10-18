
var cources = [
    {
        id: 1,
        name: "Javascript",
        coin: 1
    },
    {
        id: 2,
        name: "html,css",
        coin: 1
    },
    {
        id: 3,
        name: "C/C++",
        coin: 3
    },
    {
        id: 4,
        name: "C/C++",
        coin: 0
    },
    {
        id: 5,
        name: "Ruby",
        coin: 200
    }
];

// var newCources = cources.map(function(cources , index)){

// } 
// function courceHandles(cource, index) {
//     return {
//         id: `Khóa hoc ${cource.id}`,
//         name: `${cource.name}`,
//         coin: `Giá ${cource.coin}`,
//         index: index,
//         OriginArray: cource
//     }
// }

function courceHandles(cource, index) {
    return `<h2>${cource.name}</h2>`;
}
var newCources = cources.map(courceHandles);

console.log(newCources.join(''));//chuoi








