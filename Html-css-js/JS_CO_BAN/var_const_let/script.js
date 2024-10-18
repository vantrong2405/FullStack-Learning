var arrays = [];

for (let i = 0; i < 5; i++) {
    arrays[i] = function() {
        console.log(i); //khi gọi hàm này giá trị của biến i là 5 chứ k phải giá trị mảng là 5
    }
};

//i = 5 

arrays[2]();