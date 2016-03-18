
//Globals

var arrEnemyChosen = new Array();
var intPreviousChoice = 999666;

function enemyCreateRandom(intNoOfEnemys) {

  for (var i=0; i<intNoOfEnemys; i++) { //For loop to go through creations

    var objEnemy = Object.create(objCharacter); //Create new object using objCharacter definition; Create new loop so is a unique object
        //objEnemy.setValues(strTitle, strFirstname, strSecondname, strDOB, strGender); //DOB = YYYY-MM-DD
        objEnemy.setValues(i
                          ,returnPropertyRandom(arrFullname)
                          ,returnDOBRandom(new Date(1979, 0, 1), new Date(1980, 0, 1))
                          ); //DOB = YYYY-MM-DD

    arrEnemy.push(objEnemy); //Write Object to Array

    var x = document.getElementById("elemEnemyContainer");
        x.innerHTML += objEnemy.createCard();
        x.style.visibility = "visible";

  }// For

}// Function
