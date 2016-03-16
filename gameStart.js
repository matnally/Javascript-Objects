
function gameStart() {

  var intCharacterInstances = document.getElementById("elemCharacterInstances").value; //Get Number of Characters to create from Input box

  /*
    createCharacter - Creates the Object and populates Array
    createCharacterCard - Create HTML from Array
    populateElement - Populates element with HTML
  */
  populateElement("elemFriendlyContainer", createCharacterCard(createCharacter(arrFriendly, intCharacterInstances)));
  populateElement("elemEnemyContainer", createCharacterCard(createCharacter(arrEnemy, intCharacterInstances)));

  document.getElementById("elemNewGameContainer").remove(); //Remove New Game DIV

}
