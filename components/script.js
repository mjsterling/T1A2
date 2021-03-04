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
  x,
  dx,
  y,
  dy,
  flash,
  nflash,
  leftbtn,
  rightbtn,
  arrows,
  ltoggle,
  rtoggle,
  conticon;

window.onload = onloadFunc;
window.onresize = windowDOMreset;

function onloadFunc() {
  menutoggle = false;
  dmtoggle = false;
  ltoggle = true;
  rtoggle = true;
  y = 0;
  dy = 0;
  bfc = document.getElementById("body-flex-container");
  db = document.getElementById("darkbutton");
  bkg = document.getElementById("background");
  dppic = document.getElementById("dprofilepic");
  mppic = document.getElementById("mprofilepic");
  menucont = document.getElementsByClassName("menucont");
  mll = document.getElementsByClassName("mllogo");
  menubtn1 = document.getElementById("menubutton1");
  navbar = document.getElementById("navbar");
  conticon = document.getElementsByClassName("conticon");
  arrows = document.getElementsByClassName("menubtn");

  if (localStorage.getItem("darkmode") == "true") {
    toggleDarkMode();
  }
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

  if (document.getElementsByClassName("flashcard") !== null) {
    flash = document.getElementsByClassName("flashcard");
    leftbtn = document.getElementById("leftbutton");
    rightbtn = document.getElementById("rightbutton");
    nflash = 0;
    flash[nflash].style.left = "15%";
    console.log(nflash);
    rtogglef();
    console.log(rtoggle);

}
}

window.addEventListener("mousedown", (e) => {
    x = e.clientX;
    console.log("x =", x);
    y = e.clientY;
    console.log("y =", y);
  });

window.addEventListener("mouseup", (e) => {
  if (window.innerHeight / window.innerWidth < 0.5) {
    dx = e.clientX;
    console.log("dx = ", dx);
    if (x > dx && x - dx > 50 && menutoggle == false) {
      toggleMenu();
    }
    if (dx > x && dx - x > 50 && menutoggle == true) {
      toggleMenu();
    }
  } else {
    dy = e.clientY;
    console.log("dy = ", dy);
    if (y > dy && y - dy > 50 && menutoggle == false) {
      toggleMenu();
    }
    if (dy > y && dy - y > 50 && menutoggle == true) {
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
  if (window.innerHeight / window.innerWidth < 0.5) {

    if (x > dx && x - dx > 50 && menutoggle == false) {
      toggleMenu();
    }
    if (dx > x && dx - x > 50 && menutoggle == true) {
      toggleMenu();
    }
  } else if (flash !== null) {
    if (x > dx && x - dx > 50) {
      flashLeft();
    }
    if (dx > x && dx - x > 50) {
      flashRight();
  }
    if (y > dy && y - dy > 50 && menutoggle == false) {
      toggleMenu();
    }
    if (dy > y && dy - y > 50 && menutoggle == true) {
      toggleMenu();
    }
  }
  x = 0;
  dx = 0;
  y = 0;
  dy = 0;
});

function flashLeft() {
  if (nflash <= 4) {
  flash[nflash+1].style.left = "15%";
  flash[nflash].style.left = "-65%";
  ++nflash;
  console.log(nflash);
  if (rtoggle == false) {
    rtogglef();
  }
  if (nflash == 4) {
    ltogglef();
  }
}
}


function flashRight() {
  if (nflash >= 0) {
    flash[nflash - 1].style.left = "15%";
  flash[nflash].style.left = "95%";
  --nflash;
  console.log(nflash);
  }
  if (nflash == 0) {
    rtogglef();
  }
  if (ltoggle == false) {
    ltogglef();
  }
}

function ltogglef() {
  if (ltoggle == true) {
  leftbtn.style.opacity = "0";
  setTimeout(() => {
    leftbtn.style.left = "-10%";
  }, 500);
  ltoggle = false;
}

  else {
    leftbtn.style.left = "7%";
    leftbtn.style.opacity = "1";
    ltoggle = true;
  }
}


function rtogglef() {
  if (rtoggle == true) {
  rightbtn.style.opacity = "0";
  setTimeout(() => {
    rightbtn.style.left = "110%";
  }, 500);
  rtoggle = false;
}

  else {
    rightbtn.style.left = "88%";
    rightbtn.style.opacity = "1";
    rtoggle = true;
  }
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
    menubtn1.style.filter = "invert(1)";
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
    for (i = 0; i < conticon.length; i++) {
      conticon[i].style.filter = "invert(1)";
    }

    for (i = 0; i < arrows.length; i++) {
      arrows[i].style.filter = "invert(1)";
    }

    dmtoggle = true;
    localStorage.setItem("darkmode", "true");
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
    menubtn1.style.filter = "invert(0)";
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
    for (i = 0; i < conticon.length; i++) {
      conticon[i].style.filter = "invert(0)";
    }

    for (i = 0; i < arrows.length; i++) {
      arrows[i].style.filter = "invert(0)";
    }
    dmtoggle = false;
    localStorage.removeItem("darkmode");
  }
}

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

function pagetransition() {
  setTimeout(() => {
    bfc.style.top = "-100%";
  }, 100);
  setTimeout(() => {
    navbar.style.top = "-100%";
  }, 200);
}

function pagetransition1() {
  pagetransition();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
}

function pagetransition2() {
  pagetransition();
  setTimeout(() => {
    window.location.href = "bio.html";
  }, 500);
}

function pagetransition3() {
  pagetransition();
  setTimeout(() => {
    window.location.href = "resume.html";
  }, 500);
}

function pagetransition4() {
  pagetransition();
  setTimeout(() => {
    window.location.href = "projects.html";
  }, 500);
}

function pagetransition5() {
  pagetransition();
  setTimeout(() => {
    window.location.href = "blog.html";
  }, 500);
}

function windowDOMreset() {
  if (window.innerWidth / window.innerHeight > 2 && bfc.style.top !== "2%") {
    bfc.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s";
    navbar.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s";
    bfc.style.top = "2%";
    bfc.style.left = "18%";
    bfc.style.height = "96%";
    navbar.style.top = "2%";
    navbar.style.left = "2%";
    navbar.style.height = "96%";
    setTimeout(() => {
      bfc.style.transition =
        "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s";
      navbar.style.transition =
        "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s";
    }, 500);
    menubtn1.style.transform = "none";
    menutoggle = false;
  }

  if (
    window.innerWidth / window.innerHeight < 2 &&
    window.innerWidth / window.innerHeight > 1
  ) {
    bfc.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s";
    navbar.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s";
    bfc.style.top = "16%";
    bfc.style.left = "18%";
    bfc.style.height = "82%";
    bfc.style.width = "80%";
    navbar.style.left = "2%";
    navbar.style.top = "2%";
    navbar.style.height = "82%";
    navbar.style.width = "80%";
    menubtn1.style.transform = "none";
    setTimeout(() => {
      bfc.style.transition =
        "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, height 0.5s";
      navbar.style.transition =
        "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, height 0.5s";
    }, 500);
    menutoggle = false;
  }


if (
  window.innerWidth / window.innerHeight < 1 &&
  window.innerWidth / window.innerHeight > 0.75
) {
  bfc.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s";
  navbar.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s";
  bfc.style.top = "16%";
  bfc.style.left = "15%";
  bfc.style.width = "70%";
  bfc.style.height = "82%";
  navbar.style.top = "2%";
  navbar.style.height = "82%";
  navbar.style.width = "70%";
  navbar.style.left = "15%";
  setTimeout(() => {
    bfc.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s";
    navbar.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s";
  }, 500);
  menubtn1.style.transform = "none";
  menutoggle = false;
}

if (
  window.innerWidth / window.innerHeight < 0.75
) {
  bfc.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s";
  navbar.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s";
  bfc.style.top = "16%";
  bfc.style.left = "5%";
  bfc.style.width = "90%";
  bfc.style.height = "82%";
  navbar.style.top = "2%";
  navbar.style.height = "82%";
  navbar.style.width = "90%";
  navbar.style.left = "5%";
  setTimeout(() => {
    bfc.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s";
    navbar.style.transition =
      "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, left 0.5s";
  }, 500);
  menubtn1.style.transform = "none";
  menutoggle = false;
}
}