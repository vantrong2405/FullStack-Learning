const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){// Khi mà thằng xhttp này thay đổi state thì nó gọi đến thằng này 
//   if(this.readyState === 4 && this.status == 200){
//     let res = this.responseText;
//     res = JSON.parse(res)
//     let html = "";


//     res.data.forEach(element => {
//         html = html + `<div>${element.email}<div/>`;
//     });
//     document.querySelector(".response").innerHTML = html;

//     console.log(html);

//   }
// }

// xhttp.open("GET","https://reqres.in/api/users?page=2",true)
// xhttp.send();

// Fetch API

// fetch("https://reqres.in/api/users/23").then((res)=>{
//     console.log(res);
//     if(res.ok === true){
//         return res.json();// 404 -> lỗi -> res.data
//     }else{
//          throw new("Lỗi nè");
//     }
// }).then((res)=>{
//     let html = '';
//     console.log(res.data);
//         res.data.forEach(element => {
//         html = html + `<div>${element.email}<div/>`;
//     });
//     document.querySelector(".response").innerHTML = html;


// }).catch((err)=>{
//     console.warn("lỗi : " ,err);
// })

//base axios 
// axios({
//     method : "get",
//     baseURL: "https://reqres.in/api/",
//     url : "/users/23"
// })
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })

//axios instace
const http = axios.create({
    baseURL: "https://reqres.in/api",
});


// // Request
// http.interceptors.request.use((config) => {
//     // console.log(config);
//     config.headers.time = 10000000 ; 

//     return config;
// }, (error) => {
//     return Promise.reject(error)
// });

// http.get("/users?page=2").then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err);
// })

//Response
http.interceptors.response.use((config) => {
    // console.log(config);
    return config.data.data;// ta config response , vì khi response gửi về sẽ trả về 1 đống thứ 
    // ta config để nó trả về mỗi data
}, (error) => {
    return Promise.reject(error)
});

http.get("/users?page=2").then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
})