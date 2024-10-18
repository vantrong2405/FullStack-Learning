//Object mở rộng
var a = 2 ; 
var b = 'trong'

String.prototype.addText = function(){
    return this + " " + 'add text';
}

Number.prototype.caculate = function(){
    return this * this ; 
};

Number.prototype.caculate2 = function(){
    return this.caculate() * 2 ;
}
console.log(a.caculate2());