var menutoggle = false;
var dmtoggle = false;

function toggleDarkMode() {
  let bfc = document.getElementById("body-flex-container");
  let db = document.getElementById("darkbutton");
  let bkg = document.getElementById("background");
  let ppic = document.getElementById("profilepic");
  let menucont = document.getElementsByClassName("menucont");
  let mll = document.getElementsByClassName("mllogo");

  if (dmtoggle == false) {
    bfc.style.color = "white";
    bfc.style.background = "#0c0c0c";
    bfc.style.borderColor = "white";
    db.style.filter = "invert(0)";
    bkg.style.filter = "invert(0)";
    ppic.style.borderColor = "white";
    ppic.style.background = "white";
    let i;
    for (i = 0; i < menucont.length; i++) {
      menucont[i].style.background = "#33095e";
      menucont[i].style.color = "white";
      menucont[i].style.borderColor = "white";
    }
    for (i = 0; i < mll.length; i++) {
      mll[i].style.background = "white";
      mll[i].style.borderColor = "white";
    }
    dmtoggle = true;
    }

    else {
    bfc.style.background = "white";
    bfc.style.color = "#0c0c0c";
    bfc.style.borderColor = "#33095e";
    db.style.filter = "invert(1)";
    bkg.style.filter = "invert(0.8)";
    ppic.style.borderColor = "#33095e";
    ppic.style.background = "#33095e";
    let i;
    for (i = 0; i < menucont.length; i++) {
      menucont[i].style.background = "white";
      menucont[i].style.color = "#33095e";
      menucont[i].style.borderColor = "#33095e";
    }
    for (i = 0; i < mll.length; i++) {
      mll[i].style.background = "#33095e";
      mll[i].style.borderColor = "#33095e";
    }
    dmtoggle = false;   
    }
}

function toggleMenu() {
  let bfc = document.getElementById("body-flex-container"),
      menubtn = document.getElementById("menubutton");
  if (menutoggle == false) {
    bfc.style.height = "67%";
    bfc.style.top = "24%";
    menubtn.style.filter = "invert(0)";
    menutoggle = true;
  } else {
    bfc.style.height = "86%";
    bfc.style.top = "12%";

    menubtn.style.filter = "invert(1)";
    menutoggle = false;
  }
}
