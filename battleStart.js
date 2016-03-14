
var timRound = "";
var intDunno = 10;

function battleStart() {

  timRound = window.setInterval(dunnoHere, 1000);

}

function dunnoHere() {

var x = document.getElementById("elemTemp");
    x.value = intDunno;

    intDunno = intDunno - 1;

  if (intDunno <= 0) {
    window.clearInterval(timRound);
    alert("Timer stopped!");
  }

}
