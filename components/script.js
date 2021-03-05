// declare global vars

var menutoggle,
  dmtoggle,
  bfc,
  db,
  bkg,
  dppic,
  mppic,
  menucont,
  mll,
  menubtn1,
  navbar,
  x = 0,
  dx = 0,
  y = 0,
  dy = 0,
  flash,
  flashid = 0,
  leftbtn,
  rightbtn,
  ltoggle,
  rtoggle,
  invertbtn,
  nope = false;

//execute on page load

window.onload = onloadFunc;

function onloadFunc() {

  // assign elements to vars after page loads to avoid throwing null every 2 seconds

  menutoggle = false;
  dmtoggle = false;
  ltoggle = true;
  rtoggle = true;
  bfc = document.getElementById("body-flex-container");
  db = document.getElementById("darkbutton");
  bkg = document.getElementById("background");
  dppic = document.getElementById("dprofilepic");
  mppic = document.getElementById("mprofilepic");
  menucont = document.getElementsByClassName("menucont");
  mll = document.getElementsByClassName("mllogo");
  menubtn1 = document.getElementById("menubutton1");
  navbar = document.getElementById("navbar");
  invertbtn = document.getElementsByClassName("invertbtn");

  // check local storage and turn on dark mode
  if (localStorage.getItem("darkmode") == "true") {
    toggleDarkMode();
  }

  //page load slide-in animation
  if (window.innerHeight / window.innerWidth < 0.5) {
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
    leftbtn = document.getElementById("leftbutton");
    rightbtn = document.getElementById("rightbutton");
    flash[flashid].style.left = "15%";
    console.log(flashid);
    rtogglef();
    console.log(rtoggle);
    }
}

//drag and swipe navigation

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

  if (window.innerHeight / window.innerWidth < 0.5) {

    if (x > dx && x - dx > 50 && menutoggle == false) {
      toggleMenu();
    }
    if (dx > x && dx - x > 50 && menutoggle == true) {
      toggleMenu();
    }
  } 
  
  if (flash.length > 0) {
    if (x > dx && x - dx > 50) {
      flashLeft();
    }
    if (dx > x && dx - x > 50) {
      flashRight();
    }
  }

    if (y > dy && y - dy > 50 && menutoggle == false) {
      toggleMenu();
    }
    if (dy > y && dy - y > 50 && menutoggle == true) {
      toggleMenu();
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
  if (window.innerHeight / window.innerWidth < 0.5) {
    if (x > dx && x - dx > 50 && menutoggle == false) {
      toggleMenu();
    }
    if (dx > x && dx - x > 50 && menutoggle == true) {
      toggleMenu();
    }
  } 
  //if flashcards exist
  if (flash.length > 0) {
    if (x > dx && x - dx > 50 && flashid < 4) {
      flashLeft();
    }
    if (dx > x && dx - x > 50 && flashid > 0) {
      flashRight();
    }
  }

  //non landmob menu toggle
    if (y > dy && y - dy > 50 && menutoggle == false) {
      toggleMenu();
    }
    if (dy > y && dy - y > 50 && menutoggle == true) {
      toggleMenu();
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
    if (rtoggle == false) {
      rtogglef();
    }
    if (flashid == 4) {
      ltogglef();
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
    rtogglef();
  }
  if (ltoggle == false) {
    ltogglef();
  }
}

// disable left/right buttons at top/bottom of flashcard stack

function ltogglef() {
  if (ltoggle == true) {
    leftbtn.style.left = "-10%";
    ltoggle = false;
  } else {
    leftbtn.style.left = "7%";
    ltoggle = true;
  }
}

function rtogglef() {
  if (rtoggle == true) {
    rightbtn.style.left = "110%";
    rtoggle = false;
  } else {
    rightbtn.style.left = "88%";
    rtoggle = true;
  }
}

//toggle dark mode

function toggleDarkMode() {
  if (dmtoggle == false) {
    bfc.style.color = "white";
    bfc.style.background = "#0c0c0c";
    bfc.style.borderColor = "white";
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
    for (i = 0; i < invertbtn.length; i++) {
      invertbtn[i].style.filter = "invert(1)";
    }

    dmtoggle = true;
    localStorage.setItem("darkmode", "true");
  } else {
    bfc.style.background = "white";
    bfc.style.color = "#0c0c0c";
    bfc.style.borderColor = "#33095e";
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
    for (i = 0; i < invertbtn.length; i++) {
      invertbtn[i].style.filter = "invert(0)";
    }
    dmtoggle = false;
    localStorage.removeItem("darkmode");
  }
}

//toggle menu on click/swipe

function toggleMenu() {
  if (window.innerHeight / window.innerWidth < 0.5) {
    lsToggleMenu();
  } else {
    ptToggleMenu();
  }
}

function ptToggleMenu() {
  if (menutoggle == false) {
    bfc.style.top = "2%";
    navbar.style.top = "16%";
    menubtn1.style.transform = "rotateX(180deg)";
    menutoggle = true;
  } else {
    bfc.style.top = "16%";
    navbar.style.top = "2%";
    menubtn1.style.transform = "none";
    menutoggle = false;
  }
}

function lsToggleMenu() {
  if (menutoggle == false) {
    bfc.style.left = "2%";
    navbar.style.left = "18%";
    menubtn1.style.transform = "rotateY(180deg)";
    menutoggle = true;
  } else {
    bfc.style.left = "18%";
    navbar.style.left = "2%";
    menubtn1.style.transform = "none";
    menutoggle = false;
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
  bfc.style.transition =
  "border-color 0.5s, background-color 0.5s, color 0.5s";
navbar.style.transition =
  "border-color 0.5s, background-color 0.5s, color 0.5s";
  if (window.innerWidth / window.innerHeight > 2 && bfc.style.top !== "2%") {
    bfc.style.top = "2%";
    bfc.style.left = "18%";
    bfc.style.height = "96%";
    navbar.style.top = "2%";
    navbar.style.left = "2%";
    navbar.style.height = "96%";
    menubtn1.style.transform = "none";
    menutoggle = false;
  }

  if (
    window.innerWidth / window.innerHeight < 2 &&
    window.innerWidth / window.innerHeight > 1
  ) {
    bfc.style.top = "16%";
    bfc.style.left = "18%";
    bfc.style.height = "82%";
    bfc.style.width = "80%";
    navbar.style.left = "2%";
    navbar.style.top = "2%";
    navbar.style.height = "82%";
    navbar.style.width = "80%";
    menubtn1.style.transform = "none";
    menutoggle = false;
  }

  if (
    window.innerWidth / window.innerHeight < 1 &&
    window.innerWidth / window.innerHeight > 0.75
  ) {
    bfc.style.top = "16%";
    bfc.style.left = "15%";
    bfc.style.width = "70%";
    bfc.style.height = "82%";
    navbar.style.top = "2%";
    navbar.style.height = "82%";
    navbar.style.width = "70%";
    navbar.style.left = "15%";
    menubtn1.style.transform = "none";
    menutoggle = false;
  }

  if (window.innerWidth / window.innerHeight < 0.75) {
    bfc.style.top = "16%";
    bfc.style.left = "5%";
    bfc.style.width = "90%";
    bfc.style.height = "82%";
    navbar.style.top = "2%";
    navbar.style.height = "82%";
    navbar.style.width = "90%";
    navbar.style.left = "5%";
    menubtn1.style.transform = "none";
    menutoggle = false;
  }
  setTimeout(() => {
    bfc.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s, height 0.5s";
    navbar.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s, height 0.5s";
  }, 500);
}
