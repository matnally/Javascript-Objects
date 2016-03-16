
function gameStart() {

    var x = document.getElementById("elemNewGameNoOfEnemys"); //Get Number of Enemies to create from Input box
    enemyCreateRandom(x.value); //Create Nth Enemies

    friendlyCreateRandom(1); //Create Nth Friendly

    document.getElementById("elemNewGameContainer").remove(); //Remove New Game DIV

}
