/*
   Array method 
   forEach() : duyet qua tung phan tu cua mang  1 : mang , 2: index
   every() : tra ve boolean , tat ca deu dung thi ve true , nguoc lai neu co 1 cai sai tra ve false
   some() : nguoc lai voi every , chi can 1 cai dung tra ve true , tat ca sai tra ve false
   find() : tim kiem tra ve noi dung index trong mang (chi 1 )
   filter() : giong find nhung tra ve tat ca 

*/

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
    }
];  
//forEach
// cources.forEach(function (cources, index) {
//     console.log(index);
//     console.log(cources);
// })


cources.filter(function (cources, index) {
    return cources.name === "C/C++";
})







