
var cources = [
    {
        id: 1,
        name: "Javascript",
        coin: 100
    },
    {
        id: 2,
        name: "html,css",
        coin: 200
    },
    {
        id: 3,
        name: "C/C++",
        coin: 220
    },
    {
        id: 4,
        name: "C/C++",
        coin: 200
    },
    {
        id: 5,
        name: "Ruby",
        coin: 480
    }
];

// var number = [100, 200, 220, 200, 480];
// var totalNumber = number.reduce(function (total, currentNumber) {
//     return total + currentNumber;
// });
// console.log(totalNumber);

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function (flatOutput, concatItem) {
//     return flatOutput.concat(concatItem);
// }, []);//tuc la flatOutput hien tai la mang rong
// console.log(flatArray);

//lay ra cac khoa hoc dua vao 1 mang moi 
var topics = [
    {
        topic: "Front-end ",
        cources: [
            {
                id: 1,
                title: "HTML , css"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        cources: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var newArray = topics.reduce(function (topic, cource) {
    return topic.concat(cource.cources);
}, [])

console.log(newArray);

var htmls = newArray.map(function (cource) {
    return `
    <div>
        <h2> ID : ${cource.id}</h2>
        <h2>${cource.title}</h2>
    </div>
    `
})

console.log(htmls.join(""));






