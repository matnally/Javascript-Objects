
function gameStart() {

    var x = document.getElementById("elemNoOfEnemys");
    enemyCreateRandom(x.value); //Create Enemies


    document.getElementById("elemNewGameContainer").remove(); //Remove New Game div

}
