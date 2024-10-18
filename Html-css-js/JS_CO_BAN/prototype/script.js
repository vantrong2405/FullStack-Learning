
//biển thêm prototype phải là 1 hàm
function person(firstName , lastName){
    this.firstName = firstName ;    this.lastName = lastName ;
    this.showName = function(){    
        console.log('Name : ' + this.firstName +' '+this.lastName);
    } 
}



//THêm prototype vào person
person.prototype.showfullName = function(){
    console.log('Tên của bạn là Đoàn Võ '+ this.lastName +' ' +this.firstName);
}


var vanTrong = new person('Trọng' ,'Văn');
vanTrong.showfullName();

//  gán proto

//đối tượng chung
var nguoi = {
    firstName : 'firstName',
    lastName : 'lastName',
    showName : function(){
          console.log("Name = " + this.firstName + " " + this.lastName);
    }
}

var test = {};
// test.__proto__ = nguoi; // Khi tọa kiểu này dữ liệu sẽ mất
test = Object.create(nguoi);
test.showName();





