var myUrl = "https://iddevlop.github.io/assets/pelacakan-pengiriman/";

var modal = document.getElementById("myModal");

// var btn = document.getElementById("myBtn");

document.getElementById('cekresi').addEventListener('submit', (event) => {
    event.preventDefault();
    var mresi = document.getElementById('noresi').value;
    if (!mresi) {
        console.log("Data tidak di temukan");
        alert("Data tidak di temukan");
    } else {
        var moutput = document.getElementById("output");
        var miframe = document.createElement("iframe"); 
        var mcurl = "https://webcsw.ocs.co.jp/csw/ECSWG0201R00003P.do?cwbno="+mresi;

        miframe.setAttribute("class", "iframe");
        miframe.setAttribute("id", "xiframe");
        miframe.src = mcurl;

        moutput.appendChild(miframe);
        
        modal.style.display = "block";
    }
});


var span = document.getElementsByClassName("close")[0];

/*
btn.onclick = function() {
    if (document.getElementById("xiframe")) {
        document.getElementById("xiframe").remove();
    }  
}
*/

span.onclick = function() {
    modal.style.display = "none";
    if (document.getElementById("xiframe")) {
        document.getElementById("xiframe").remove();
    }
}

var unique = "iddevlop.github.io";
if (window.location.hostname == unique) {
    // alert("Sukses");
} else {
    alert("This site active for id-devlop.web.app, We can sue you!");
    window.location.href = myUrl;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
