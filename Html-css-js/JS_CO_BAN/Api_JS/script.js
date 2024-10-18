// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     //Nếu nó hoàn thành 4 bước ( lên w3 đọc ) và trạng thái nó đã bằng 200 ( tránh trường hợp link lỗi )
//     if (this.readyState === 4 && this.status === 200) {
//         const json = JSON.parse(this.responseText); //đổi chuỗi thành đối tượng 
//         console.log(json);
//         let html = "";
//         json.data.forEach(element => {
//             html = html + `<div><img src = "${element.avatar}"></div>`
//         });

//         document.getElementById("result").innerHTML = html;
//     }
// }

// xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
// xhttp.send();


fetch("https://reqres.in/api/users?page=2").then((res) => {
    return res.json();
}).then((res) => {
    console.log(res);
    let html = '';
    res.data.forEach(element => {
        html = html + `<div><img style="width : 150px; height : 150px; object-fit : contain" src= "${element.avatar}"></div>`;
        document.querySelector("#result").innerHTML = html;
    });
}).catch((error) => {
    console.log(error);
})