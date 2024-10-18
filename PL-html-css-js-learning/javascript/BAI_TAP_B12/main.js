var menubar=document.querySelector(".bx-menu"),
 layer1=document.querySelector('.layer1'),
 layer2=document.querySelector('.layer2'),
 menu=document.querySelector('.menu'),
 logo=document.querySelector('.logo')
layer2.classList.add('hiden');


menubar.onclick=()=>{
    layer2.classList.toggle('active');
    layer1.classList.toggle('hiden');
    menu.classList.toggle('doimau');
    logo.classList.toggle('hiden')
    this.classList.toggle('bx-x')
}
