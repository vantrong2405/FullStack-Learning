const h1 = document.getElementsByTagName("h1")[0];
h1.style.color="red";

const h2 = document.createElement("h2");
h2.textContent="I am alex";
// document.body.appendChild(h2);
document.body.insertBefore(h2,h1)//chèn h2 trước h1