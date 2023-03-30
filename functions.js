function loadWindow() {
  console.log("Hello World")
}


window.onload = (event) => {
  if (document.getElementById("name-warning")) {
    document.getElementById("name-warning").style.display = 'none';
  }
  if (document.getElementById("org-warning")) {
    document.getElementById("org-warning").style.display = 'none';
  }
  if (document.getElementById("email-warning")) {
    document.getElementById("email-warning").style.display = 'none';
  }

  if (document.getElementById("user-name-warning")) {
    document.getElementById("user-name-warning").style.display = 'none';
  }
  if (document.getElementById("user-org-warning")) {
    document.getElementById("user-org-warning").style.display = 'none';
  }
  if (document.getElementById("user-email-warning")) {
    document.getElementById("user-email-warning").style.display = 'none';
  }
  if (document.getElementById("label-success")) {
    document.getElementById("label-success").style.display = 'none';
  }
  if (document.getElementById("user-label-success")) {
    document.getElementById("user-label-success").style.display = 'none';
  }
};


function formValidation(event) {
  let check1 = document.getElementById("name-input").value != ""
  let check2 = document.getElementById("org-input").value != ""
  let check3 = document.getElementById("email-input").value != ""
  if (!check1) {
    document.getElementById("name-warning").style.display = 'block';
    return
  }
  document.getElementById("name-warning").style.display = 'none';
  if (!check2) {
    document.getElementById("org-warning").style.display = 'block';
    return
  }
  document.getElementById("org-warning").style.display = 'none';
  if (!check3) {
    document.getElementById("email-warning").style.display = 'block';
    return
  }
  document.getElementById("email-warning").style.display = 'none';
  document.getElementById("label-success").style.display = 'block';
}


function popupFormValidation(event) {
  let check1 = document.getElementById("user-name-input").value != ""
  let check2 = document.getElementById("user-org-input").value != ""
  let check3 = document.getElementById("user-email-input").value != ""
  if (!check1) {
    document.getElementById("user-name-warning").style.display = 'block';
    return
  }
  document.getElementById("user-name-warning").style.display = 'none';
  if (!check2) {
    document.getElementById("user-org-warning").style.display = 'block';
    return
  }
  document.getElementById("user-org-warning").style.display = 'none';
  if (!check3) {
    document.getElementById("user-email-warning").style.display = 'block';
    return
  }
  document.getElementById("user-email-warning").style.display = 'none';
  document.getElementById("user-label-success").style.display = 'block';
}




function highlightBorder() {
  console.log("hi")
  document.getElementById('drop-down-input').style.borderColor = "blue"
}