Array.prototype.map2 = function (callBack) {
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        output.push(callBack(this[i], i));
    }
    return output;
}

var array = [
    'Javasciprt',
    'html',
    'ruby',
    'C++'
]

var htmls = array.map2(function (cources, index) {
    return (`<h2>${index, cources}</h2>`);
});

console.log(htmls.join(''));




