function person(firstName , lastName){
    this.firstName = firstName , 
    this.lastName = lastName ,
    this.showName = function(){    
        console.log('Name : ' + this.firstName +' '+this.lastName);
    } 
}
var khoa = new person('trọng','văn');
khoa.showName();




