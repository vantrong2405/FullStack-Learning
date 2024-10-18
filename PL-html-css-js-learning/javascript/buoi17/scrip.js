var nut = document.querySelectorAll('.nutChuyen ul li');
var slide = document.querySelectorAll('.slides ul li');
for (let i = 0; i < nut.length; i++) {
    nut[i].onclick = function () {
        for (let i = 0; i < nut.length; i++) {
            nut[i].classList.remove('active');

        }
        this.classList.add('active');
        // console.log(this.previousElementSibling);
        var nutactive = this;
        var vt = 0;
        for (vt = 0; nutactive = nutactive.previousElementSibling; vt++) {

        }
        // console.log(vt);
        // slide
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active');
        }
        slide[vt].classList.add('active');
    }
}

autoSLide();
function autoSLide() {
    var thoigian = setInterval(function () {
        var vtslide = 0;
        var slideHienTai = document.querySelector('.slides ul li.active');
        for (var vtslide = 0; slideHienTai = slideHienTai.previousElementSibling; vtslide++) {

        }
        if (vtslide < (slide.length - 1)) {
            for (var i = 0; i < slide.length; i++) {
                slide[i].classList.remove('active');
                nut[i].classList.remove('active');
            }
            //cho phan tu tiep theo của slide hiên ra
            slide[vtslide].nextElementSibling.classList.add('active');
            nut[vtslide].nextElementSibling.classList.add('active');
        } else {
            for (var i = 0; i < slide.length; i++) {
                slide[i].classList.remove('active');
                nut[i].classList.remove('active');
            }
            //cho phan tu tiep theo của slide hiên ra
            slide[0].classList.add('active'); 
            nut[0].classList.add('active');
        }
    }, 1000);
}