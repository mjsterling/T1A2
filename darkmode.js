function enableDarkMode() {
    var bfc = document.getElementById("body-flex-container");
    bfc.style.background = ("#0c0c0c");
    bfc.style.color = ("white");
    document.getElementById("disableDarkButton").style.zIndex = "2";
    document.getElementById("enableDarkButton").style.zIndex = "1";
}

function disableDarkMode() {
    var bfc = document.getElementById("body-flex-container");
    bfc.style.background = ("white");
    bfc.style.color = ("#0c0c0c");
    document.getElementById("disableDarkButton").style.zIndex = "1";
    document.getElementById("enableDarkButton").style.zIndex = "2";
}