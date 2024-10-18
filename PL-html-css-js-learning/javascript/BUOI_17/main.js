var nut = document.querySelectorAll(".nutchuyen ul li");
var slide = document.querySelectorAll(".slides ul li");
    for(var i = 0 ; i<nut.length;i++){  
        nut[i].onclick = function(){
            for(var i = 0 ; i<nut.length;i++){
                nut[i].classList.remove("active");
            }
             this.classList.add("active");
            //  console.log(this.previousElementSibling);
            var nutactive = this;
            var vt = 0 ;
            for(vt = 0 ; nutactive = nutactive.previousElementSibling;vt++){
                // console.log(vt);
            }

            for(let i = 0 ; i<slide.length;i++){
                slide[i].classList.remove("active");
            }
            slide[vt].classList.add("active");
        }
    }


    autoSlide();
    function autoSlide(){
        var thoigian = setInterval(function(){
             var vtslide = 0 ; 
             var slidehientai = document.querySelector(".slide ul li.active");
             for (var vtslide = 0; slidehientai=slidehientai.previousElementSibling; vtslide++) 
        {}

        if(vtslide <=(slidehientai.length-1)){
               vtslide++;
        }else{
             vtslide = 0;
        }
        },1000)
    }