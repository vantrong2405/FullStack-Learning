var fullName = "Đây là kênh học lập trình về JS JS JS JS của F8";

//kiểm tra độ dài của chuỗi 
console.log(fullName.length);

//tim index va ham search

console.log("INdex : " + fullName.lastIndexOf("JS"));
console.log("Search : " + fullName.search("JS"));//k co tham số phía sau tìm 

//cắt chuỗi slice 
console.log("Cat chuỗi : " + fullName.slice(4, 6));

//thay đỗi chuỗi khi tìm 
console.log("Replace : " + fullName.replace("JS", "Javascript"))
console.log("Replace 2 : " + fullName.replace(/JS/g, "javascript"))

//toupper in hoa 
console.log("Toupper : " + fullName.toUpperCase());
//tolower in thuong
console.log("Tolower : " + fullName.toLowerCase());

//ham trim xoa khoang trang
console.log("Trim : " + fullName.trim());

//split  cat thanh array
console.log("SPlit : " + fullName.split(''));

//cach de kiem ky tu bang index cho truoc
console.log("Index : " + fullName.charAt(2));

