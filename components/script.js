var menutoggle = false;
var dmtoggle = false;

function toggleDarkMode() {
  let bfc = document.getElementById("body-flex-container");
  let db = document.getElementById("darkbutton");
  let bkg = document.getElementById("background");
  let ppic = document.getElementById("profilepic");

  if (dmtoggle == false) {
    bfc.style.color = "white";
    bfc.style.background = "#0c0c0c";
    bfc.style.borderColor = "white";
    db.style.filter = "invert(1)";
    bkg.style.filter = "invert(0)";
    ppic.style.borderColor = "white";
    ppic.style.background = "white";
    dmtoggle = true;
    }

    else {
    bfc.style.background = "white";
    bfc.style.color = "#0c0c0c";
    bfc.style.borderColor = "#33095e";
    db.style.filter = "invert(0)";
    bkg.style.filter = "invert(0.8)";
    ppic.style.borderColor = "#33095e";
    ppic.style.background = "#33095e";
    dmtoggle = false;   
    }
}

function toggleMenu() {
  let bfc = document.getElementById("body-flex-container"),
      menubtn = document.getElementById("menubutton");
  if (menutoggle == false) {
    bfc.style.height = "66%";
    bfc.style.top = "24%";
    menubtn.style.filter = "invert(1)";
    menutoggle = true;
  } else {
    bfc.style.height = "86%";
    bfc.style.top = "12%";

    menubtn.style.filter = "invert(0)";
    menutoggle = false;
  }
}
