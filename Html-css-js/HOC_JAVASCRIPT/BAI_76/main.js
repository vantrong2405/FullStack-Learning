var Use = function (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.toString = function () {
        return `${firstName} ${lastName}`;
    }
}

function Use1(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

var author = new Use("Doan vo", "Van trong", "AHD");
var student = new Use("Truong", "Minh khang", "Avatar");

author.title = "Dong thong bao";
student.comment = "Dong comment cua hoc vien";
console.log(author.toString());
console.log(student.toString());