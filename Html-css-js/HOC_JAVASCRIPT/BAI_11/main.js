// 1 số hàm built-in
   /*
      1. Alert
      2. Console
      3.Confirm
      4. Prompt 
      5. Set timeout
      6. Set interval 
   */

// alert('hello ');//lời gioi thiệu ( thông báo )
// console.log('Hello !');//in ra
// confirm('Đủ tuổi chưa ? ');//thong báo 
// prompt('Đủ tuổi chưa hả ? ');//thong báo có chỗ nhập
// setTimeout(function(){//cho 1 đoạn code để chạy sau khoảng thời gian ( 1 lần )
//     alert("Hello world");
// },1000)

setInterval(function(){
   console.log('Value ' + Math.random());
},1000);//cho đoạn code chạy ra liên tục trong 1 khoảng thời gian 
// prompt('M đủ 18 tuổi chưa ? mà xem :D  ');
