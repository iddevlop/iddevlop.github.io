/* Disclaimer */
var myUrl = "https://iddevlop.github.io"; // this add your url
var cpr = document.getElementById("myCopyright");
if(!cpr){
    window.location.href = myUrl;
}

function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        window.location.replace(myUrl);
        return false;
    }
}

document.onkeydown = redirectCU;

function redirectKK(e) {
    if (e.which == 3) {
        alert("Thank you for visiting my website :)");
        return false;
    }
}

document.oncontextmenu = redirectKK;

document.addEventListener("keyup", (e) => {
    if (e.key == "PrintScreen") {
        navigator.clipboard.writeText("");
        alert("Screenshots disabled!");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "p") {
        alert("This section is not allowed to print or export to PDF");
        e.cancelBubble = true;
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});

var unique = "iddevlop.github.io";
if (window.location.hostname == unique) {
    // alert("Sukses");
} else {
    alert("This site active for id-devlop.web.app, We can sue you!");
    window.location.href = myUrl;
}

if (document.getElementById("getapp")) {
    document.getElementById("getapp").onclick = function() {
        window.location.href = "https://play.google.com/store/apps/details?id=iddevlop.web.app.manajemenkeuangan";
    };
}
