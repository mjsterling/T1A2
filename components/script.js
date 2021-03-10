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

// assign elements to vars after page loads to avoid throwing null every 2 seconds
window.onload = () => {
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
  console.log("aspectRatio:", aspectRatio);
  if (aspectRatio >= 1.75) {
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
  if (flash.length > 0) {
    btnleft = document.getElementById("btnleft");
    btnright = document.getElementById("btnright");
    flash[flashid].style.left = "15%";
    console.log("flashid:", flashid);
    toglf();
  }

  //drag and swipe listeners
  bfc.addEventListener("mousedown", (e) => {
    x = e.clientX;
    console.log("x:", x);
    y = e.clientY;
    console.log("y:", y);
  });
  
  bfc.addEventListener("mouseup", (e) => {
    dx = e.clientX;
    console.log("dx:", dx);
    dy = e.clientY;
    console.log("dy:", dy);
  
    if (aspectRatio >= 1.75) {
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
    if (aspectRatio < 1.75) {
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

  bfc.addEventListener("touchstart", (e) => {
    x = e.touches[0].clientX;
    console.log("x:", x);
    y = e.touches[0].clientY;
    console.log("y:", y);
  });
  
  bfc.addEventListener("touchend", (e) => {
    dx = e.changedTouches[0].clientX;
    console.log("dx: ", dx);
    dy = e.changedTouches[0].clientY;
    console.log("dy:", dy);
    //if mobile landscape toggle menu
    if (aspectRatio >= 1.75) {
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
    if (aspectRatio < 1.75) {
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
};







// arrow key navigation
window.onkeydown = (n) => {
  console.log("n.keyCode:", n.keyCode);

  //up and down non-landmob
  aspectRatio = window.innerWidth / window.innerHeight;
  if (n.keyCode == 38 && aspectRatio < 1.75 && togmenu == false) {
    pttoggleMenu();
  }
  if (n.keyCode == 40 && aspectRatio < 1.75 && togmenu == true) {
    pttoggleMenu();
  }

  //left and right landmob
  if (n.keyCode == 37 && aspectRatio >= 1.75 && togmenu == false) {
    lstoggleMenu();
  }
  if (n.keyCode == 39 && aspectRatio >= 1.75 && togmenu == true) {
    lstoggleMenu();
  }

  //left and right flashcards
  if (n.keyCode == 37 && flash.length > 0) {
    flashRight();
  }
  if (n.keyCode == 39 && flash.length > 0) {
    flashLeft();
  }

  //1-5 page nav
  if (n.keyCode == 49) {
    pagetransition("index.html");
  }
  if (n.keyCode == 50) {
    pagetransition("bio.html");
  }
  if (n.keyCode == 51) {
    pagetransition("resume.html");
  }
  if (n.keyCode == 52) {
    pagetransition("projects.html");
  }
  if (n.keyCode == 53) {
    pagetransition("blog.html");
  }
};

// slide/click left and right to switch between flashcards

function flashLeft() {
  if (flashid < 4) {
    flash[flashid + 1].style.left = "15%";
    flash[flashid].style.left = "-65%";
    ++flashid;
    console.log("flashid:", flashid, "flashLeft");
    if (flashid == 4 && togr == true) {
      togrf();
    }
    if (flashid == 1 && togl == false) {
      toglf();
    }

  }
}

function flashRight() {
  if (flashid > 0) {
    flash[flashid - 1].style.left = "15%";
    flash[flashid].style.left = "95%";
    --flashid;
    console.log("flashid:", flashid, "flashRight");
    if (flashid == 0 && togl == true) {
      toglf();
    }
    if (flashid == 3 && togr == false) {
      togrf();
    }
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
      invertbtn[i].style.color = "#002fff";
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
      invertbtn[i].style.color = "#ffd000";
    }
    togdrk = false;
    localStorage.removeItem("darkmode");
  }
}

//toggle menu on click/swipe

function toggleMenu() {
  if (aspectRatio >= 1.75) {
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

// check window size on resize/orientation change and set elements to their correct positions for each window size

window.onresize = windowDOMreset;

function windowDOMreset() {
  aspectRatio = window.innerWidth / window.innerHeight;
  console.log("aspectRatio:", aspectRatio);
  bfc.style.transition = "border-color 0.5s, background-color 0.5s, color 0.5s";
  navbar.style.transition =
    "border-color 0.5s, background-color 0.5s, color 0.5s";
  if (aspectRatio >= 1.75) {
    bfc.style.top = "2%";
    bfc.style.left = "18%";
    bfc.style.height = "96%";
    bfc.style.width = "80%";
    navbar.style.top = "2%";
    navbar.style.left = "2%";
    navbar.style.height = "96%";
    navbar.style.width = "80%";
    btnmenu.style.transform = "none";
    togmenu = false;
  }

  if (aspectRatio < 1.75 && aspectRatio >= 1) {
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
