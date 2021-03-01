var menutoggle = false;

function enableDarkMode() {
    let bfc = document.getElementById("body-flex-container");
        bfc.style.background = ("#ededed");
        bfc.style.color = ("#2e2e2e");
    setTimeout(() => {
        bfc.style.background = ("#d4d4d4");
        bfc.style.color = ("#404040");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#bdbdbd");
        bfc.style.color = ("#636363");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#9c9c9c");
        bfc.style.color = ("#9c9c9c");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#636363");
        bfc.style.color = ("#bdbdbd");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#404040");
        bfc.style.color = ("#d4d4d4");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#2e2e2e");
        bfc.style.color = ("#ededed");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#0c0c0c");
        bfc.style.color = ("white");
    }, 60);
    document.getElementById("disableDarkButton").style.zIndex = "2";
    document.getElementById("enableDarkButton").style.zIndex = "1";
}

function disableDarkMode() {
    let bfc = document.getElementById("body-flex-container");
        bfc.style.background = ("#2e2e2e");
        bfc.style.color = ("#ededed");
    setTimeout(() => {
        bfc.style.background = ("#404040");
        bfc.style.color = ("#d4d4d4");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#636363");
        bfc.style.color = ("#bdbdbd");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#9c9c9c");
        bfc.style.color = ("#9c9c9c");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#bdbdbd");
        bfc.style.color = ("#636363");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#d4d4d4");
        bfc.style.color = ("#404040");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("#ededed");
        bfc.style.color = ("#2e2e2e");
    }, 60);
    setTimeout(() => {
        bfc.style.background = ("white");
        bfc.style.color = ("#0c0c0c");
    }, 60);
    document.getElementById("disableDarkButton").style.zIndex = "1";
    document.getElementById("enableDarkButton").style.zIndex = "2";
}

function toggleMenu() {
    let inpage = document.getElementById("inpage");
    let bfc = document.getElementById("body-flex-container");

    if (menutoggle == false) {
        inpage.style.zIndex = "1";
        menutoggle = true;
        bfc.style.top = "18vh";
        bfc.style.height = "74vh";
    }
    
    else {
        inpage.style.zIndex = "-1";
        menutoggle = false;
        bfc.style.top = "12vh";
        bfc.style.height = "80vh";
    }
}