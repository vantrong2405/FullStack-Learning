$('h1').animate({opacity:0.5});

// jqc
// jqclick
// $(selector).click(function (e) { 
//     e.preventDefault();
    
// });
// var khoi = document.querySelector(".khoi");
// var nut = document.querySelector("button");

// nut.onclick = function(){
//     khoi.classList.toggle("dichuyen");
// }

// jcl -> jclclassadd
$(`button`).click(function (e) { 
    // $(`.khoi`).addClass('dichuyen');
    // jcl
    $(`.khoi`).toggleClass('dichuyen');
});

// sự kiênh click

//cuộn chuột
// jsc
$(window).scroll(function () { 
    console.log($('html,body').scrollTop());
   
});


