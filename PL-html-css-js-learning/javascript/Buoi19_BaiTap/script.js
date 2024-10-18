// jquery
$(`.dn`).click(function (e) { 
    $('.formdn').addClass("activeForm");    
});

// jquery
$(`.btnok`).click(function (e) { 
    $('.formdn').remove("activeForm");    
});

//click từng thành phần dùng jquery 
// $('.menu a').click(function (e) { 
//     e.preventDefault();//ngăn chặn mặc định 
//     $("html,body").animate({scrollTop:$(".about").offset().top-60},1000);
//     // trừ chiều cao menu vì menu đang fixed
//     // khác với thẻ liên kết a có thể tăng được tốc độ lăn
// });

// nth-child(index 1->n)
$('.menu a:nth-child(1)').click(function (e) { 
    e.preventDefault();//ngăn chặn mặc định 
    $("html,body").animate({scrollTop:$(".home").offset().top-60},1000);
    // trừ chiều cao menu vì menu đang fixed
    // khác với thẻ liên kết a có thể tăng được tốc độ lăn
});
$('.menu a:nth-child(2)').click(function (e) { 
    e.preventDefault();//ngăn chặn mặc định 
    $("html,body").animate({scrollTop:$(".about").offset().top-60},1000);
    // trừ chiều cao menu vì menu đang fixed
    // khác với thẻ liên kết a có thể tăng được tốc độ lăn
});
$('.menu a:nth-child(3)').click(function (e) { 
    e.preventDefault();//ngăn chặn mặc định 
    $("html,body").animate({scrollTop:$(".product").offset().top-60},1000);
    // trừ chiều cao menu vì menu đang fixed
    // khác với thẻ liên kết a có thể tăng được tốc độ lăn
});
$('.menu a:nth-child(4)').click(function (e) { 
    e.preventDefault();//ngăn chặn mặc định 
    $("html,body").animate({scrollTop:$(".news").offset().top-60},1000);
    // trừ chiều cao menu vì menu đang fixed
    // khác với thẻ liên kết a có thể tăng được tốc độ lăn
});
$('.menu a:nth-child(5)').click(function (e) { 
    e.preventDefault();//ngăn chặn mặc định 
    $("html,body").animate({scrollTop:$(".contact").offset().top-60},1000);
    // trừ chiều cao menu vì menu đang fixed
    // khác với thẻ liên kết a có thể tăng được tốc độ lăn
});


console.log($(".about").offset().top);//vị trí của đối tượng so với top 

// sự kiênj lăn chuột jcr
$(window).scroll(function () { 
    if($('html,body').scrollTop() >150){
        $(".menu").addClass("doimenu");
    }else{
        $(".menu").removeClass("doimenu");
    }
});


// xử lý popup
$('.bx-x').click(function (e) { 
    $('.popup').addClass('anPopup');
});

//tự động ẩn
var tb = setInterval(function(){ 
    $('.popup').addClass('anPopup');
    clearInterval(tb);
}, 3000);