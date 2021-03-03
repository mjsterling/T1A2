var menutoggle, dmtoggle, bfc, db, bkg, dppic, mppic, menucont, mll, menubtn, bfctop;
window.onload = updateVars;
window.onresize = windowDOMreset;

function updateVars() {
  menutoggle = false;
  dmtoggle = false;
  bfc = document.getElementById("body-flex-container");
  db = document.getElementById("darkbutton");
  bkg = document.getElementById("background");
  dppic = document.getElementById("dprofilepic");
  mppic = document.getElementById("mprofilepic");
  menucont = document.getElementsByClassName("menucont");
  mll = document.getElementsByClassName("mllogo");
  menubtn = document.getElementById("menubutton");
}

function toggleDarkMode() {
  if (dmtoggle == false) {
    bfc.style.color = "white";
    bfc.style.background = "#0c0c0c";
    bfc.style.borderColor = "white";
    db.style.filter = "invert(0)";
    bkg.style.filter = "invert(0)";
    dppic.style.borderColor = "white";
    dppic.style.background = "white";
    mppic.style.borderColor = "white";
    mppic.style.background = "white";
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
  } else {
    bfc.style.background = "white";
    bfc.style.color = "#0c0c0c";
    bfc.style.borderColor = "#33095e";
    db.style.filter = "invert(1)";
    bkg.style.filter = "invert(1)";
    dppic.style.borderColor = "#33095e";
    dppic.style.background = "#33095e";
    mppic.style.borderColor = "#33095e";
    mppic.style.background = "#33095e";
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
  if (menutoggle == false) {
    bfc.style.height = "65%";
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

function windowDOMreset() {
  if (window.innerWidth >= 769 && bfc.style.top !== "20%") {
    bfc.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s";
    bfc.style.top = "20%";
    bfc.style.height = "78%";
    setTimeout(() =>
    { bfc.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, height 0.5s"; },
    500);
    menubtn.style.filter = "invert(1)";
    menutoggle = false;
  }

  if (window.innerWidth <= 768 && menutoggle == false && bfc.style.top !== "12%") {
    bfc.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s";
    bfc.style.top = "12%";
    bfc.style.height = "86%";
    setTimeout(() =>
      { bfc.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, height 0.5s"; },
      500);
    menubtn.style.filter = "invert(1)";
    menutoggle = false;
  }
}
