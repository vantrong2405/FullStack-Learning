var nut=document.querySelectorAll('.nut');
for(let i=0;i<nut.length;i++){
    nut[i].onclick=function(){
        console.log(this.getAttribute('data-mk'));
        // getAttribute lay gia tri ben data-mk nut mo consolog xem
    }
}

var nut4 = document.querySelector(".nut4");
// var khoi = document.querySelector(".khoi");
// nut4.onclick = function(){
//     khoi.classList.toggle("active");
// }

nut4.onclick = function(){
    // console.log(this.getAttribute("data-hieuung"));
    var hieuung = this.getAttribute("data-hieuung");
    var dt = document.getElementById(hieuung);
    // var dt = document.getElementById("a1");
    dt.classList.toggle("dichuyen");
}

// test
console.log("text");    
