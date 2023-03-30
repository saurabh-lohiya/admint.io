function loadWindow() {
  console.log("Hello World")
}


window.onload = (event) => {
  if (document.getElementById("warning1")) {
    document.getElementById("warning1").style.display = 'none';
  }
  if (document.getElementById("warning3")) {
    document.getElementById("warning3").style.display = 'none';
  }
  if (document.getElementById("warning4")) {
    document.getElementById("warning4").style.display = 'none';
  }

  if (document.getElementById("popup-warning1")) {
    document.getElementById("popup-warning1").style.display = 'none';
  }
  if (document.getElementById("popup-warning3")) {
    document.getElementById("popup-warning3").style.display = 'none';
  }
  if (document.getElementById("popup-warning4")) {
    document.getElementById("popup-warning4").style.display = 'none';
  }
  if (document.getElementById("label-success")) {
    document.getElementById("label-success").style.display = 'none';
  }
  if (document.getElementById("popup-label-success")) {
    document.getElementById("popup-label-success").style.display = 'none';
  }
};


function formValidation(event) {
  let check1 = document.getElementById("input-field1").value != ""
  let check2 = document.getElementById("input-field3").value != ""
  let check3 = document.getElementById("input-field4").value != ""
  if (!check1) {
    document.getElementById("warning1").style.display = 'block';
    return
  }
  document.getElementById("warning1").style.display = 'none';
  if (!check2) {
    document.getElementById("warning3").style.display = 'block';
    return
  }
  document.getElementById("warning3").style.display = 'none';
  if (!check3) {
    document.getElementById("warning4").style.display = 'block';
    return
  }
  document.getElementById("warning4").style.display = 'none';
  document.getElementById("label-success").style.display = 'block';
}


function popupFormValidation(event) {
  let check1 = document.getElementById("popup-input-field1").value != ""
  let check2 = document.getElementById("popup-input-field3").value != ""
  let check3 = document.getElementById("popup-input-field4").value != ""
  if (!check1) {
    document.getElementById("popup-warning1").style.display = 'block';
    return
  }
  document.getElementById("popup-warning1").style.display = 'none';
  if (!check2) {
    document.getElementById("popup-warning3").style.display = 'block';
    return
  }
  document.getElementById("popup-warning3").style.display = 'none';
  if (!check3) {
    document.getElementById("popup-warning4").style.display = 'block';
    return
  }
  document.getElementById("popup-warning4").style.display = 'none';
  document.getElementById("popup-label-success").style.display = 'block';
}




function highlightBorder() {
  console.log("hi")
  document.getElementById('input-field2').style.borderColor = "blue"
}