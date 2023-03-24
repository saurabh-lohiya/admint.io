function loadWindow() {
  console.log("Hello World")
}


window.onload = (event) => {
  document.getElementById("warning1").style.display = 'none';
  document.getElementById("warning3").style.display = 'none';
  document.getElementById("warning4").style.display = 'none';
  document.getElementById("label-success").style.display = 'none';
  //	document.getElementById("blurMe").style.filter = "blur(6px)";
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
  // if (!(check1 && check2 && check3)) {
  //   event.preventDefault()
  // }
  //document.getElementById(errorField).style.display = 'none';
  //console.log("Validation", event)
}
// document.getElementById("blurMe").style.filter = "blur(6px)";
  document.getElementById("opacityme").style.filter = "blur(6px)";
};
