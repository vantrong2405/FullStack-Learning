    //câu 1 hàm khởi tạo 
    function Employee(firstName, lastName, age, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }


    //câu 2
    Employee.prototype.currentYear = function() {
        // var date = new Date(); //tạo đối tượng date ngày / tháng / năm
        var fullYear = new Date().getFullYear();
        if (fullYear >= this.age) {
            var birthYear = fullYear - this.age;
            return birthYear;
        } else if (this.age > fullYear) {
            return undefined;
        }
    };
    Employee.prototype.calculatingLengthName = function() { //TÍnh độ dài name 
        return this.firstName.length() + this.lastName.length();
    }

    //2.1 Thêm nhân viên vào mảng
    var arrEmployees = []; //Tạo mảng rỗng
    function addEmployees(firstName, lastName, age, salary, birth) {
        let newEmployee = new Employee(firstName, lastName, age, salary, birth); //Khai báo 1 sinh viên mới
        arrEmployees.push(newEmployee); //add nhân viên vào mảng 
    }

    //2.2 Sắp xếp nhân viên trong mảng 
    // const sortedAsc = arr1.sort(
    //     (objA, objB) => Number(objA.date) - Number(objB.date),
    // );

    function sortYear(arrEmployees) {
        arrEmployees.sort(
            (objA, objB) => Number(objA.currentYear()) - Number(objB.currentYear())
        );
    }

    console.log('ok');
    console.log('emnd');
    //Đưa thông tin lên bảng
    var lastnameNV = document.querySelector("#lastnameNV"),
        firstnameNV = document.querySelector("#firstnameNV"),
        ageNV = document.querySelector("#ageNV"),
        salaryNV = document.querySelector("#salaryNV"),
        btnaddNV = document.querySelector(".btn-addNV"),
        tableBody = document.querySelector('#myTable');

    btnaddNV.addEventListener('click', function() {

        var lastnameValue = lastnameNV.value,
            firstnameValue = firstnameNV.value,
            ageValue = ageNV.value,
            salaryValue = salaryNV.value;
        let newEmployee = new Employee(firstnameValue, lastnameValue, ageValue, salaryValue);
        //Khai báo 1 sinh viên mới với data từ các ô 
        var newValue = document.createElement('tr'); //tạo thẻ tr mới vì trong tbody có nhiều td
        newValue.classList.add('Id_tr'); //Thêm id mới vào tr
        newValue.innerHTML = `
        <td class="text-center align-middle">${lastnameValue}</td>
        <td class="text-center align-middle">${firstnameValue}</td>
        <td class="text-center align-middle">${ageValue}</td>
        <td class="text-center align-middle">${salaryValue}</td>
        <td class="text-center align-middle">${newEmployee.currentYear()}</td>
    `; //Xét nội dung cho thẻ tr

        tableBody.appendChild(newValue); //Đoạn code này sẽ năm sau cha nó myTable
        addEmployees(lastnameValue, firstnameValue, ageValue, salaryValue, newEmployee.currentYear());
        //Khi add nhân viên mới data đổ vể mảng

    });


    // End đưa thông tin lên bảng

    //Bắt đối tượng sắp xếp tăng dần
    var sort_yeah = document.querySelector('#increase');

    sort_yeah.addEventListener('click', function() {
        sortYear(arrEmployees);
        console.log(arrEmployees);
        for (let i = 0; i < arrEmployees.length; i++) {
            console.log(Number(arrEmployees[i].currentYear()));
        }
        var Id_tr_old = document.querySelectorAll(".Id_tr");
        if (Id_tr_old != null) {
            for (var i = 0; i < arrEmployees.length; i++) {
                var newTr = document.createElement('tr'); //tạo thẻ tr mới vì trong tbody có nhiều td
                newTr.classList.add('Id_tr1');
                var newTr = document.createElement('tr');
                newTr.classList.add('Id_tr1');
                newTr.innerHTML = `
                    <td class="text-center align-middle">${arrEmployees[i].lastName}</td>
                    <td class="text-center align-middle">${arrEmployees[i].firstName}</td>
                    <td class="text-center align-middle">${arrEmployees[i].age}</td>
                    <td class="text-center align-middle">${arrEmployees[i].salary}</td>
                    <td class="text-center align-middle">${arrEmployees[i].currentYear()}</td>
                `; // Tạo value mới 
                Id_tr_old[i].parentNode.replaceChild(newTr, Id_tr_old[i]);
            }
        }

    });