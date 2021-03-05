// declare global vars

var togmenu,
  togdrk,
  bfc,
  bkg,
  picd,
  picm,
  menucont,
  mll,
  btnmenu,
  navbar,
  x = 0,
  dx = 0,
  y = 0,
  dy = 0,
  flash,
  flashid = 0,
  btnleft,
  btnright,
  togl,
  togr,
  invertbtn,
  aspectRatio;

//execute on page load

window.onload = onloadFunc;

function onloadFunc() {
  // assign elements to vars after page loads to avoid throwing null every 2 seconds

  bfc = document.getElementById("bodyflexcontainer");
  bkg = document.getElementById("background");
  togdrk = false;
  togl = true;
  togmenu = false;
  togr = true;
  picd = document.getElementById("picprofiled");
  picm = document.getElementById("picprofilem");
  menucont = document.getElementsByClassName("menucont");
  mll = document.getElementsByClassName("mllogo");
  btnmenu = document.getElementById("btnmenu");
  navbar = document.getElementById("navbar");
  invertbtn = document.getElementsByClassName("invertbtn");

  // check local storage and turn on dark mode
  if (localStorage.getItem("darkmode") == "true") {
    toggleDarkMode();
  }

  //page load slide-in animation
  aspectRatio = window.innerWidth / window.innerHeight;
  console.log("aspectRatio = ", aspectRatio);
  if (aspectRatio >= 2) {
    setTimeout(() => {
      bfc.style.top = "2%";
    }, 100);
    setTimeout(() => {
      navbar.style.top = "2%";
    }, 200);
  } else {
    setTimeout(() => {
      bfc.style.top = "16%";
    }, 100);
    setTimeout(() => {
      navbar.style.top = "2%";
    }, 200);
  }

  // check if flashcards exist on projects/blog page, assign vars, slide in first card
  flash = document.getElementsByClassName("flashcard");
  console.log(flash);
  if (flash.length > 0) {
    btnleft = document.getElementById("btnleft");
    btnright = document.getElementById("btnright");
    flash[flashid].style.left = "15%";
    console.log(flashid);
    togrf();
    console.log(togr);
  }
}

//drag and swipe listeners

window.addEventListener("mousedown", (e) => {
  x = e.clientX;
  console.log("x =", x);
  y = e.clientY;
  console.log("y =", y);
});

window.addEventListener("mouseup", (e) => {
  dx = e.clientX;
  console.log("dx = ", dx);
  dy = e.clientY;
  console.log("dy = ", dy);

  if (aspectRatio >= 2) {
    //if mobile landscape toggle menu

    if (x > dx && x - dx > 50 && togmenu == false) {
      toggleMenu();
    }
    if (dx > x && dx - x > 50 && togmenu == true) {
      toggleMenu();
    }
  }
  //if flashcards exist move them

  if (flash.length > 0) {
    if (x > dx && x - dx > 50) {
      flashLeft();
    }
    if (dx > x && dx - x > 50) {
      flashRight();
    }
  }
  if (aspectRatio < 2) {
    //non landmob menu toggle

    if (y > dy && y - dy > 50 && togmenu == false) {
      toggleMenu();
    }
    if (dy > y && dy - y > 50 && togmenu == true) {
      toggleMenu();
    }
  }
  x = 0;
  dx = 0;
  y = 0;
  dy = 0;
});

window.addEventListener("touchstart", (e) => {
  x = e.touches[0].clientX;
  console.log("x =", x);
  y = e.touches[0].clientY;
  console.log("y =", y);
});

window.addEventListener("touchend", (e) => {
  dx = e.changedTouches[0].clientX;
  console.log("dx = ", dx);
  dy = e.changedTouches[0].clientY;
  console.log("dy =", dy);
  //if mobile landscape toggle menu
  if (aspectRatio >= 2) {
    if (x > dx && x - dx > 50 && togmenu == false) {
      toggleMenu();
    }
    if (dx > x && dx - x > 50 && togmenu == true) {
      toggleMenu();
    }
  }
  //if flashcards exist move them
  if (flash.length > 0) {
    if (x > dx && x - dx > 50 && flashid < 4) {
      flashLeft();
    }
    if (dx > x && dx - x > 50 && flashid > 0) {
      flashRight();
    }
  }

  //non landmob menu toggle
  if (aspectRatio < 2) {
    if (y > dy && y - dy > 50 && togmenu == false) {
      toggleMenu();
    }
    if (dy > y && dy - y > 50 && togmenu == true) {
      toggleMenu();
    }
  }
  x = 0;
  dx = 0;
  y = 0;
  dy = 0;
});

//slide/click left and right to switch between flashcards

function flashLeft() {
  if (flashid <= 4) {
    flash[flashid + 1].style.left = "15%";
    flash[flashid].style.left = "-65%";
    ++flashid;
    console.log(flashid);
    if (togr == false) {
      togrf();
    }
    if (flashid == 4) {
      toglf();
    }
  }
}

function flashRight() {
  if (flashid >= 0) {
    flash[flashid - 1].style.left = "15%";
    flash[flashid].style.left = "95%";
    --flashid;
    console.log(flashid);
  }
  if (flashid == 0) {
    togrf();
  }
  if (togl == false) {
    toglf();
  }
}

// disable left/right buttons at top/bottom of flashcard stack

function toglf() {
  if (togl == true) {
    btnleft.style.left = "-10%";
    togl = false;
  } else {
    btnleft.style.left = "7%";
    togl = true;
  }
}

function togrf() {
  if (togr == true) {
    btnright.style.left = "110%";
    togr = false;
  } else {
    btnright.style.left = "88%";
    togr = true;
  }
}

//toggle dark mode

function toggleDarkMode() {
  if (togdrk == false) {
    bfc.style.color = "white";
    bfc.style.background = "#0c0c0c";
    bfc.style.borderColor = "white";
    bkg.style.filter = "invert(0)";
    picd.style.borderColor = "white";
    picd.style.background = "white";
    picm.style.borderColor = "white";
    picm.style.background = "white";
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
    for (i = 0; i < invertbtn.length; i++) {
      invertbtn[i].style.filter = "invert(1)";
    }

    togdrk = true;
    localStorage.setItem("darkmode", "true");
  } else {
    bfc.style.background = "white";
    bfc.style.color = "#0c0c0c";
    bfc.style.borderColor = "#33095e";
    bkg.style.filter = "invert(1)";
    picd.style.borderColor = "#33095e";
    picd.style.background = "#33095e";
    picm.style.borderColor = "#33095e";
    picm.style.background = "#33095e";
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
    for (i = 0; i < invertbtn.length; i++) {
      invertbtn[i].style.filter = "invert(0)";
    }
    togdrk = false;
    localStorage.removeItem("darkmode");
  }
}

//toggle menu on click/swipe

function toggleMenu() {
  if (aspectRatio >= 2) {
    lstoggleMenu();
  } else {
    pttoggleMenu();
  }
}

function pttoggleMenu() {
  if (togmenu == false) {
    bfc.style.top = "2%";
    navbar.style.top = "16%";
    btnmenu.style.transform = "rotateX(180deg)";
    togmenu = true;
  } else {
    bfc.style.top = "16%";
    navbar.style.top = "2%";
    btnmenu.style.transform = "none";
    togmenu = false;
  }
}

function lstoggleMenu() {
  if (togmenu == false) {
    bfc.style.left = "2%";
    navbar.style.left = "18%";
    btnmenu.style.transform = "rotateY(180deg)";
    togmenu = true;
  } else {
    bfc.style.left = "18%";
    navbar.style.left = "2%";
    btnmenu.style.transform = "none";
    togmenu = false;
  }
}

//page navigation animation and hrefs

function pagetransition(page) {
  setTimeout(() => {
    bfc.style.top = "-100%";
  }, 100);
  setTimeout(() => {
    navbar.style.top = "-100%";
  }, 200);
  setTimeout(() => {
    window.location.href = page;
  }, 500);
}

// check window size on resize and set elements to their correct positions for each window size

window.onresize = windowDOMreset;

function windowDOMreset() {
  aspectRatio = window.innerWidth / window.innerHeight;
  console.log("aspectratio = ", aspectRatio);
  bfc.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s";
  navbar.style.transition =
    "border-color 0.5s, background-color 0.5s, color 0.5s";
  if (aspectRatio >= 2 && bfc.style.top !== "2%") {
    bfc.style.top = "2%";
    bfc.style.left = "18%";
    bfc.style.height = "96%";
    navbar.style.top = "2%";
    navbar.style.left = "2%";
    navbar.style.height = "96%";
    btnmenu.style.transform = "none";
    togmenu = false;
  }

  if (aspectRatio < 2 && aspectRatio >= 1) {
    bfc.style.top = "16%";
    bfc.style.left = "18%";
    bfc.style.height = "82%";
    bfc.style.width = "80%";
    navbar.style.left = "2%";
    navbar.style.top = "2%";
    navbar.style.height = "82%";
    navbar.style.width = "80%";
    btnmenu.style.transform = "none";
    togmenu = false;
  }

  if (aspectRatio < 1 && aspectRatio > 0.75) {
    bfc.style.top = "16%";
    bfc.style.left = "15%";
    bfc.style.width = "70%";
    bfc.style.height = "82%";
    navbar.style.top = "2%";
    navbar.style.height = "82%";
    navbar.style.width = "70%";
    navbar.style.left = "15%";
    btnmenu.style.transform = "none";
    togmenu = false;
  }

  if (aspectRatio <= 0.75) {
    bfc.style.top = "16%";
    bfc.style.left = "5%";
    bfc.style.width = "90%";
    bfc.style.height = "82%";
    navbar.style.top = "2%";
    navbar.style.height = "82%";
    navbar.style.width = "90%";
    navbar.style.left = "5%";
    btnmenu.style.transform = "none";
    togmenu = false;
  }
  setTimeout(() => {
    bfc.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s, height 0.5s";
    navbar.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s, height 0.5s";
  }, 500);
}
