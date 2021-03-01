var menutoggle = false;
var dmtoggle = false;

function toggleDarkMode() {
  let bfc = document.getElementById("body-flex-container");
  let dmb = document.getElementById("darkbutton");
  if (dmtoggle == false) {
    bfc.style.color = "white";
    bfc.style.background = "#171717";
    dmb.style.filter = "invert(1)";
    dmtoggle = true;   
    }

    else {
    bfc.style.background = "white";
    bfc.style.color = "#0c0c0c";
    dmb.style.filter = "invert(0)";
    dmtoggle = false;   
    }
}

function toggleMenu() {
  let bfc = document.getElementById("body-flex-container"),
      menubtn = document.getElementById("menubutton");
  if (menutoggle == false) {
    bfc.style.height = "64vh";
    bfc.style.top = "24vh";
    menubtn.style.filter = "invert(1)";
    menutoggle = true;
  } else {
    bfc.style.height = "86vh";
    bfc.style.top = "11vh";

    menubtn.style.filter = "invert(0)";
    menutoggle = false;
  }
}
