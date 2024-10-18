document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();

    function newValue() {
        var fist_new = document.querySelector('#firstName');
        var last_new = document.querySelector('#lastName');
        var age_new = document.querySelector('#lastName');
        var salary_new = document.querySelector('#salary');
        fist_new.value = "";
        last_new.value = "";
        age_new.value = "";
        salary_new.value = "";
    };

    var $ = function(id) {
        return document.getElementById(id);
    };
    const adđBtn = $("addBtn");
    var employees = [];
    // Khai báo function gán giá trị cho obj Employee
    var nhanVien = function(firstName, lastName, age, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    };
    var nhanvien1 = new nhanVien();
    console.log(nhanvien1);

    // Hàm tính ra Birthday
    function birthDayHandler(employee) {
        var today = new Date();
        var birthDay = new Date(
            today.getFullYear() - employee.age,
            today.getMonth(),
            today.getDate()
        );
        return `$ { birthDay.getFullYear() }` /
            `$ { birthDay.getMonth() }` /
            `$ { birthDay.getDate() }`;
    }
    // Hàm ráp tên đủ
    function fullNameHandler(nhanvien) {
        return `$ { nhanvien.firstName }`
        `$ { nhanvien.lastName }`;
    }
    // Hàm tính độ dài tên
    function fullNameLengthHandler(nhanvien) {
        return (nhanvien.firstName + nhanvien.lastName).length;
    }
    // Hàm láy giá trị value của Form khi submit
    function getFormValue() {
        return {

            firstName: $("firstName").value,
            lastName: $("lastName").value,
            age: $("age").value,
            salary: $("salary").value,


        };
    }

    // Hàm insert thêm Row cho Table
    function insertRowTableHandler(employee) {
        var employeeTable = $("employeeTable");
        var currentRow = employeeTable.insertRow();
        for (var index in employee) {
            var currentCell = currentRow.insertCell();
            if (typeof employee[index] !== "function") {
                currentCell.innerHTML = employee[index];
            } else {
                currentCell.innerHTML = employee[index]();
            }
        }
    }

    // Hàm sắp xếp mảng
    function sortEmployees(direction) {
        if ((direction = "asc")) {
            employees.sort(function(preEmp, nextEmp) {
                var preEmployBirth = new Date(preEmp.calBirthday());
                var nextEmployBirth = new Date(nextEmp.calBirthday());
                return preEmployBirth - nextEmployBirth;
            });
        } else {
            employees.sort(function(preEmp, nextEmp) {
                return preEmp.calLengthFullName() - nextEmp.calLengthFullName();
            });
        }
    }
    // Gắn các phương thức  vào prototype

    nhanVien.prototype.calFullName = function() {
        return fullNameHandler(this);
    };
    nhanVien.prototype.calBirthday = function() {
        return birthDayHandler(this);
    };
    nhanVien.prototype.calLengthFullName = function() {
        return fullNameLengthHandler(this);
    };



    console.log(nhanVien);
    // Ham Submit Form


    function submitHandler(e) {
        e.preventDefault();

        var formValue = getFormValue(); // Lay du lieu tu form
        console.log(formValue);
        var newEmployee = new nhanVien( // tao doi tuong newNhanVien
            formValue.firstName,
            formValue.lastName,
            formValue.age,
            formValue.salary
        );
        employees.push(newEmployee);
        sortEmployees("asc");

        if (newEmployee.firstName === '' || newEmployee.lastName === '' || newEmployee.age === '' ||
            newEmployee.salary === '') {
            alert("Vui lòng nhập đủ thông tin !");
        } else {
            insertRowTableHandler(newEmployee);
            var inputAdd = document.querySelectorAll('.input-add')
            for (let i = 0; i < inputAdd.length; i++) {
                inputAdd[i].value = '';
            }

        }
    }

    // Nhận sự kiện click button Add
    adđBtn.addEventListener("click", function(e) {
        e.preventDefault();
        submitHandler(e);
    });
});


const input = document.querySelectorAll('.input-add');
var submit_form = document.querySelector("#addBtn");
// Lắng nghe sự kiện nhập liệu trong mỗi ô input
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('keyup', function(enterhandle) {
        if (enterhandle.key === 'Enter') { // Kiểm tra phím enter 
            // Di chuyển tới ô input tiếp theo (nếu có)
            if (i < input.length - 1) { // Vì từ ô input gần cuối nhấn enter , ô input cuối k dc nhấn
                // vòng lặp còn 1 lần ( vòng cuối sẽ nhấn btn khác)
                input[i + 1].focus();
            } else { //Nếu hết ô input thì qua nút khác
                adđBtn.addEventListener("click", function(e) {
                    e.preventDefault();
                    if (newEmployee.firstName === '' || newEmployee.lastName === '' || newEmployee.age === '' ||
                        newEmployee.salary === '') {
                        console.log('ok');
                    }
                    submitHandler(e);
                });
            }
        }
    });
}

