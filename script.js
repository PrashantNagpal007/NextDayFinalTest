// Code goes here


function mOver(obj) {
    obj.innerHTML = "Thank You";
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
}

function mDown(obj){
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj){
  obj.style.backgroundColor = "#D94A38"
  obj.innerHTML = "Thank you";
}

function myMessage(){
  alert("This message was triggered from the onload event");
}

function myOnChangeFunction(){
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
  var y = document.getElementById("fSpan");
  y.innerHTML = x.value.length;
}

function OnKeyPressFunction(){
  var x = document.getElementById("keyUpDown");
  x.style.backgroundColor = "lightgrey";
}

function OnKeyUpFunction(){
  var x = document.getElementById("keyUp");
  var y = document.getElementById("spanKeyUp");
  y.innerHTML = x.value.length;
  if(x.value.length >=30)
  {
    alert("Maximum 30 characters allowed.");
    y.style.color = "red";
  }
  return y.innerHTML;
}

window.onclick = pageBackGroundColor;
function pageBackGroundColor(){
  document.getElementByTagName("BODY")[0].style.backgroundColor = "lightgrey";
}

function ChangeColor(elmnt,clr){
  elmnt.style.color = clr;
}

function ClickableDropdown(){
  document.getElementById("myDropdown").classList.toggle("show");
}

function OnKeyDownFunction(){
  var x = document.getElementById("keyDown");
  var y = document.getElementById("spanKeyDown");
  y.innerHTML = x.value.length;
  if(x.value.length >= 20)
  {
    y.style.color = "red";
  }
  else
  {
    y.style.color = "black";
  }
  return y.innerHTML;
}

function onKUpFunction(){
  var x = document.getElementById("keyUpDown");
  var y = document.getElementById("spanKeyUpDown");
  y.innerHTML = x.value.length;
  if(x.value.length >=30)
  {
    alert("Limit exceeded.");
    y.style.color = "red";
  }
  else if(x.value.length >=20)
  {
    y.style.color = "green";
  }
  else
  {
    y.style.color = "black";
  }
}

function onKDownFunction(){
  var x = document.getElementById("keyUpDown");
  var y = document.getElementById("spanKeyUpDown");
  y.innerHTML = x.value.length;
  return y.innerHTML;
}

function myOnFocusFunction(x){
  x.style.background = "silver";
}