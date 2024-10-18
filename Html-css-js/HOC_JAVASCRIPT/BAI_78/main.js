var Use = function (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.toString = function () {
        return `${firstName} ${lastName}`;
    }
}

var Use2 = new Use("Doan vo", " van trong ", "avatar2");
var Use3 = new Use("Nguyen", " van an ", "avatar3");

Use.prototype.getClassName = function () {
    return this.className;
}
Use.prototype.className = "Lop hoc f8";
console.log("1 : " + Use3.getClassName());
console.log(Use2.className);
console.log(Use2);