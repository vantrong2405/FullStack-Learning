var array = [
    1, 8, 2, 3, 5
]

function deQuy(start, end, cb) {
    if (start <= end) {
        cb(start);
        return deQuy(start + 1, end, cb);
    }
}


deQuy(0, array.length - 1, function (index) {
    console.log("Index : " + array[index]);
});