//cach 1 tạo bằng function
// function nguoi(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

//cách 2 tạo bằng ES6
class nguoi {
    constructor(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.showName = function() {
            console.log('Tên của bạn là : ' + this.firstName + ' ' + this.lastName);
        }
    };

}
// var vanTrong = new nguoi('trong','van');

// vanTrong.showName();

class vanTrong extends nguoi {
    constructor(firstName, lastName, gender, id) {
            super(firstName, lastName, gender);
            this.id = id;
            // this.showID = function(){
            //     return this.id;
            // }

        }
        //Nếu viết thế này hiện ra trong proto , c1
    showId() {
        return this.id;
    }

    //Nếu viết thế này hiện ra trong properti ,c2 or có thể viết trong constructor để hiện ra properti(có this)
    // showId = function() {
    //     return this.id;
    // }


}


var test = new vanTrong('trong', 'van', 'nam', 12);
// test.showName();

//tạo thuộc tính mới trong class nguoi
nguoi.prototype.showGender = function() {
    return this.gender;
}
console.log(test.showGender());