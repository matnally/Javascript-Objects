
var timRound = "";
var intRound = 0;

function battleStart() {

  timRound = window.setInterval(dunnoHere, 1000);

}

function dunnoHere() {

  intRound = intRound + 1;

  var x = document.getElementById("elemTemp");
      x.value = intRound;

/*
Work out Enemy Attack
Work out Enemy Defense
Work out Friendly Attack
Work out Friendly Defense
Work out Speed
*/

//alert(objectReturnProperty(arrFriendly, 0, "fullname"));


  if (intRound >= 10) {
    window.clearInterval(timRound);
    alert("Timer stopped!");
  }

}
