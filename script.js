//Task 1
function hideShow() {
  let a = document.querySelector("#box1");
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}

//Task2
function changeHeight() {
  console.log("aukstis");
  let a = document.querySelector("#box2");
  if (a.style.height === "350px") {
    a.style.height = "200px";
  } else {
    a.style.height = "350px";
  }
}
function changeWidth() {
  let a = document.querySelector("#box2");
  if (a.style.width === "400px") {
    a.style.width = "200px";
  } else {
    a.style.width = "400px";
  }
}
function centered() {
  let a = document.querySelector(".container_box");
  if ((a.style.justifyContent === "center", a.style.alignItems === "center")) {
    a.style.display = "block";
  } else {
    a.style.justifyContent = "center";
    a.style.alignItems = "center";
  }
}
function positioned() {
  let a = document.querySelector("#box2");
  if (a.style.position === "static") {
    a.style.position = "absolute";
  } else {
    a.style.position = "static";
  }
}
function reset() {
  document.querySelector("#box2").style.position = "absolute";
}

//Task3
let randomColor = () => {
  let codeColor = Math.floor(Math.random() * 16777215).toString(16);
  let codeColor1 = Math.floor(Math.random() * 16777215).toString(16);
  let codeColor2 = Math.floor(Math.random() * 16777215).toString(16);
  let codeColor3 = Math.floor(Math.random() * 16777215).toString(16);
  let codeColor4 = Math.floor(Math.random() * 16777215).toString(16);
  let selectBox = document.querySelectorAll(".box-color");
  let selectNr = document.querySelectorAll(".color-numer");
  selectBox[0].style.backgroundColor = "#" + codeColor;
  selectNr[0].innerText = "#" + codeColor;
  selectBox[1].style.backgroundColor = "#" + codeColor1;
  selectNr[1].innerText = "#" + codeColor1;
  selectBox[2].style.backgroundColor = "#" + codeColor2;
  selectNr[2].innerText = "#" + codeColor2;
  selectBox[3].style.backgroundColor = "#" + codeColor3;
  selectNr[3].innerText = "#" + codeColor3;
  selectBox[4].style.backgroundColor = "#" + codeColor4;
  selectNr[4].innerText = "#" + codeColor4;
};

//Task 4
document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";
  let table = document.getElementById("table");
  let row = table.insertRow();
  let numer = row.insertCell(0);
  let name = row.insertCell(1);
  let lastName = row.insertCell(2);
  let date = row.insertCell(3);
  numer.innerHTML = addNumer();
  name.innerHTML = document.getElementById("name").value;
  lastName.innerHTML = document.getElementById("lastName").value;
  date.innerHTML = document.getElementById("date").value;
  return false;
};
let i = 0;
function addNumer() {
  i++;
  return i;
}

document.getElementById("reset").onclick = function () {
  document.getElementById("table").value = "";
  document.getElementById("table").style.display = "none";
  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("date").value = "";
};
