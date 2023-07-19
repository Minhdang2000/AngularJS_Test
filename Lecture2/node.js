var student = {
  name: "",
  type: "student"
}; //object

//document.addEventListener: gắn một trình xu ly su kien voi 1 phan tu html
// vi du 'DOMContentLoaded': tên sự kiện muốn nghe: xay ra khi load lai noi dung trang web html
// contentLoaded: hàm sẽ gọi đến khi có sự kiện

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById('name').value;
  // lay gia tri cua the (id = name) trong html
  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i);
  }

  // Insert result into page
  var output = "Total Numeric value of person's name is " + totalNameValue;
  document.getElementById('output').innerText = output;
}
