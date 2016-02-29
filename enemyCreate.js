/*
var objEnemy = Object.create(objCharacter);//Create new object using objCharacter definition

    objEnemy.setValues(null, null, null, null, null); //Init

    document.write("<h1>Enemy</h1>");
    objEnemy.displayProperties();
*/

var arrEnemy = new Array(); //Global Array to store all Enemies


function enemyCreateRandom(intNoOfEnemys) {

  for (var i=0; i<intNoOfEnemys; i++) { //For loop to go through creations

    var objEnemy = Object.create(objCharacter); //Create new object using objCharacter definition; Create new loop so is a unique object
        //objEnemy.setValues(strTitle, strFirstname, strSecondname, strDOB, strGender); //DOB = YYYY-MM-DD
        objEnemy.setValues(i
                          ,returnPropertyRandom(arrTitle)
                          ,returnPropertyRandom(arrFirstname)
                          ,returnPropertyRandom(arrSecondname)
                          ,returnDOBRandom(new Date(1979, 0, 1), new Date(1980, 0, 1))
                          ,returnPropertyRandom(arrGender)
        ); //DOB = YYYY-MM-DD

    arrEnemy.push(objEnemy); //Write Object to Array

    objEnemy.createCard();

  }// For

}// Function


function returnPropertyRandom(arrArray) { // Returns a Random Property from passed in Array

  var returnPropertyRandom = arrArray[Math.floor(Math.random()*arrArray.length)]; //Value to Return
  return returnPropertyRandom;

}// Function

function returnDOBRandom(intStart, intEnd) { // Returns a Random Property from passed in Array

  var datDOB = new Date(intStart.getTime() + Math.random() * intEnd.getTime() - intStart.getTime());
  //alert(datDOB.toUTCString());
  return datDOB;

}// Function
