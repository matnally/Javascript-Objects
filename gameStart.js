
function gameStart() {

    var x = document.getElementById("elemNewGameNoOfEnemys");
    enemyCreateRandom(x.value); //Create Enemies

    friendlyCreateRandom(1) ;

    document.getElementById("elemNewGameContainer").remove(); //Remove New Game div



}
