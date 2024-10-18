var menu = document.querySelector(".nav-bar");
var iconmenu = document.querySelector(".fa-bars");

iconmenu.onclick = function () {
    menu.classList.toggle("active");
}

var icon1 = document.querySelector(".icc1");
var icon2 = document.querySelector(".icc2");
var icon3 = document.querySelector(".icc3");
var icon4 = document.querySelector(".icc4");
var icon5 = document.querySelector(".icc5");

var hr1 = document.querySelector(".hr1");
var hr2 = document.querySelector(".hr2");
var hr3 = document.querySelector(".hr3");
var hr4 = document.querySelector(".hr4");
var hr5 = document.querySelector(".hr5");

icon1.onclick = function () {
    hr1.classList.toggle("doimau2");
    hr2.classList.toggle("hidden");
    hr3.classList.toggle("hidden");
    hr4.classList.toggle("hidden");
    hr5.classList.toggle("hidden");
    
}

icon2.onclick = function () {
    hr2.classList.toggle("doimau2");
    hr1.classList.add("hidden");
    hr3.classList.add("hidden");
    hr4.classList.add("hidden");
    hr2.classList.add("hidden");
}

icon3.onclick = function () {
    hr3.classList.toggle("doimau2");
}
icon4.onclick = function () {
    hr4.classList.toggle("doimau2");
}
icon5.onclick = function () {
    hr5.classList.toggle("doimau2");
}

// 
var stopColor = document.querySelectorAll(".ic");

//xoa mau 
for(let i = 0 ; i<stopColor.length;i++){
    stopColor.onclick = function(){
        stopColor.classList.toggle("doimau2");
    }
    if(stopColor.classList[1] == "doimau2"){
        stopColor[1].classList.remove("doimau2");
    }else{
        for(let i = 0 ; i<stopColor.length;i++){
            stopColor[i].classList.remove("doimau2");
        }
    }
}





