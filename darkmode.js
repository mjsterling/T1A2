function enableDarkMode() {
    var bfc = document.getElementById("body-flex-container");
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
    var bfc = document.getElementById("body-flex-container");
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