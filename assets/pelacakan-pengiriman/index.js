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
    }
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("xiframe").remove();
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}