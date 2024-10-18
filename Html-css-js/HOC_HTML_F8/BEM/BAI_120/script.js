var btn_first = document.querySelector(".btn-primary");
var btn_second = document.querySelector(".btn-secondary");
var card_title_primary = document.querySelector(".card__title--primary");

btn_first.onclick = function(){
   card_title_primary.classList.toggle("changecolor");
   card_title_primary.classList.toggle("changefont");
}