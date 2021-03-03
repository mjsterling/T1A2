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
  menubtn2,
  navbar,
  dy,
  y,
  swiping;

window.onload = onloadFunc;
// window.onresize = windowDOMreset;

function onloadFunc() {
  menutoggle = false;
  dmtoggle = false;
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
  menubtn2 = document.getElementById("menubutton2");
  navbar = document.getElementById("navbar");
  if (localStorage.getItem('darkmode') == "true") {
    toggleDarkMode();
  }  
  setTimeout(() => {
    bfc.style.top = "16%";
  }, 100);
  setTimeout(() => {
    navbar.style.top = "2%";
  }, 200);
}


window.addEventListener('mousedown', (e) => {
  y = e.clientY;
  swiping = true;
  console.log(y);
});

window.addEventListener('mouseup', (e) => {
  dy = e.clientY;
  console.log(dy);
  if (swiping == true) {
    if (dy > y && menutoggle == true) {
    toggleMenu();
  }
    if(dy < y && menutoggle == false) {
    toggleMenu();
}
  }
  swiping = false;
  y = 0;
  dy = 0;
});

window.addEventListener('touchstart', (e) => {
  y = e.touches[0].clientY;
    console.log(y);
  swiping = true;
});

window.addEventListener('touchend', (e) => {
  dy = e.changedTouches[0].clientY;
  console.log(dy);

  if (swiping == true) {
    if (dy > y && menutoggle == true) {
    toggleMenu();
  }
    if(dy < y && menutoggle == false) {
    toggleMenu();
}
  }
  swiping = false;
  y = 0;
  dy = 0;
});

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
    menubtn1.style.filter = "invert(0)";
    menubtn2.style.filter = "invert(0)";
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
    localStorage.setItem('darkmode', 'true');
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
    menubtn1.style.filter = "invert(1)";
    menubtn2.style.filter = "invert(1)";
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
    localStorage.removeItem ('darkmode')
  }
}

function toggleMenu() {
  if (menutoggle == false) {
    bfc.style.top = "2%";
    navbar.style.top = "16%";
    menubtn1.style.opacity = "0";
    menubtn1.style.zIndex = "-3";
    menubtn2.style.zIndex = "3";
    menubtn2.style.opacity = "1";
    menutoggle = true;
  } else {
    bfc.style.top = "16%";
    navbar.style.top = "2%";
    menubtn1.style.zIndex = "3";
    menubtn1.style.opacity = "1";
    menubtn2.style.opacity = "0";
    menubtn2.style.zIndex = "-3";
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
    window.location.href = "/components/bio.html";
  }, 500);
}

function pagetransition3() {
  pagetransition();
  setTimeout(() => {
    window.location.href = "/components/resume.html";
  }, 500);
}

function pagetransition4() {
  pagetransition();
  setTimeout(() => {
    window.location.href = "/components/projects.html";
  }, 500);
}

function pagetransition5() {
  pagetransition();
  setTimeout(() => {
    window.location.href = "/components/blog.html";
  }, 500);
}

// function windowDOMreset() {
//   if (window.innerWidth >= 769 && bfc.style.top !== "20%") {
//     bfc.style.transition =
//       "border-color 0.5s, background-color 0.5s, color 0.5s";
//     bfc.style.top = "20%";
//     bfc.style.height = "78%";
//     setTimeout(() => {
//       bfc.style.transition =
//         "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, height 0.5s";
//     }, 500);
//     menubtn.style.filter = "invert(1)";
//     menutoggle = false;
//   }

//   if (
//     window.innerWidth <= 768 &&
//     menutoggle == false &&
//     bfc.style.top !== "2%"
//   ) {
//     bfc.style.transition =
//       "border-color 0.5s, background-color 0.5s, color 0.5s";
//     bfc.style.top = "2%";
//     setTimeout(() => {
//       bfc.style.transition =
//         "border-color 0.5s, background-color 0.5s, color 0.5s, top 0.5s, height 0.5s";
//     }, 500);
//     menubtn.style.filter = "invert(1)";
//     menutoggle = false;
//   }
// }
