var next=document.querySelector('.nutchuyen .right');
var prev=document.querySelector('.nutchuyen .left');
var slides=document.querySelectorAll('.one-slide');
var slSlide=slides.length;
var chisohientai=0;
var trangthai='tamdung';


// cách 2
var slideNext=function(){
    if(trangthai=='chuyendong'){return false}
    trangthai='chuyendong';
    pthientai=slides[chisohientai];

    // xác định chỉ số pt tiếp theo 
    if(chisohientai<slSlide-1){
        chisohientai=chisohientai+1;
    }
    else{
        chisohientai=0;
    }
    var pttieptheo=slides[chisohientai];
    // console.log(ptuhientai);
    // console.log(ptutieptheo);

    // kiểm tra hiệu ứng animation của pt hiện tại kết thúc
    pthientai.addEventListener('webkitAnimationEnd', function () {
        console.log('hieu ứng kết thúc');
        pthientai.classList.remove('active');
        pthientai.classList.remove('anslideNext')
        trangthai='tamdung';
    })
    pttieptheo.addEventListener('webkitAnimationEnd', function () {
        console.log('hieu ứng kết thúc');
        pttieptheo.classList.add('active');
        pttieptheo.classList.remove('hienslideNext')
    })

    pthientai.classList.add('anslideNext');
    pttieptheo.classList.add('hienslideNext');
}
next.addEventListener('click',slideNext);

var slidePrev=function(){
    if(trangthai=='chuyendong'){return false}
    trangthai='chuyendong';
    pthientai=slides[chisohientai];

    // xác định chỉ số pt tiếp theo 
    if(chisohientai>0){
        chisohientai=chisohientai-1;
    }
    else{
        chisohientai=slSlide-1;
    }
    var pttieptheo=slides[chisohientai];
    // console.log(ptuhientai);
    // console.log(ptutieptheo);

    // kiểm tra hiệu ứng animation của pt hiện tại kết thúc
    pthientai.addEventListener('webkitAnimationEnd', function () {
        console.log('hieu ứng kết thúc');
        pthientai.classList.remove('active');
        pthientai.classList.remove('anslidePrev')
        trangthai='tamdung';
    })
    pttieptheo.addEventListener('webkitAnimationEnd', function () {
        console.log('hieu ứng kết thúc');
        pttieptheo.classList.add('active');
        pttieptheo.classList.remove('hienslidePrev')
    })

    pthientai.classList.add('anslidePrev');
    pttieptheo.classList.add('hienslidePrev');

}
prev.addEventListener('click',slidePrev);