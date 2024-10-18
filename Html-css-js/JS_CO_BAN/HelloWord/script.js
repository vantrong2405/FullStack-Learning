// var a = 'textColor';
// c();

// function b (){
//     console.log(a); 
// }

// function c(){
//     b();
//     function d (){
//          c();
//     }

//     function e(){
//         d();
//     }
// }

// var a = 1 , b = 2 , c = 3 ; 
// a = b;
// b = c;
// console.log(a);
// console.log(b);
// console.log(c);

// object
// function welcome(){
//     console.log('welcome ' + " " + this.age);
// }



// var hi =  myName.welcome();

// hi();

var myName = {
    age : 9 ,
}


var myName1 = {
    username : 'Đoàn Võ Văn Trọng',
    age : 19 ,
    class : 'K27-Tpm2',
    ok : 20
}

var myName2 = {
    age : 32 ,
}
var myName3 = {
    age : 12 ,
}
var myName4 = {
    age : 9 ,
}
var myName5 = {
    age : 9 ,
}



function totalAge(a,b,c,d,e){ 
  console.log(arguments);
  var total = 0 ; 
  for(let i = 0 ; i<arguments.length ;i++){
    if(typeof arguments[i] == 'object'){
        total = total + arguments[i].age;
    }
  }
  console.log(total);
}


totalAge(myName , myName1 , myName2 , myName3 , myName4 , myName5 , "ọk" , "ôkla");
console.log('end');
// function tự động chạy 
// (function(name){
//     console.log(name);
// }('trong'))

//  var hi = function a (name){
//     console.log(name);
// }('trong')

function taklTo(people){

    return function send(Messenger){
        console.log('Hi , ' +people +" " + Messenger + ' ' );
    }
}

//cách để chạy function trên :

taklTo('cach 1')('cach1');//cach 1 
//cach 2 
var hi = taklTo("cach 2");
hi('cach2 ');











// Khi chạy -> hàm dc đưa lên đầu và các loai biến được tạo ra ( chauw có giá trị)




