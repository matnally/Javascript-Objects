
//Globals
var arrEnemy = new Array();
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


function addEnemyFromArray(arrArrayAddTo, arrArrayAddFrom, intIndex) {
  //Adds entry to an array from another array
  arrArrayAddTo[intIndex] = arrArrayAddFrom[intIndex];
}

function removeEnemyFromArray(arrArray, intIndex) {
  //Deletes an entry of an array. DELETE not SPLICE so retains index
  delete arrArray[intIndex];
}




function chooseEnemy(intArrayIndex) {

  var elem = "";

  addEnemyFromArray(arrEnemyChosen, arrEnemy, intArrayIndex);
  elem = document.getElementById("elemEnemyChosen");
  elem.innerHTML = arrEnemyChosen[intArrayIndex].createCardChosen();
  removeEnemyFromArray(arrEnemy, intArrayIndex);

  if (intPreviousChoice != 999666) {
    addEnemyFromArray(arrEnemy, arrEnemyChosen, intPreviousChoice);
  }// If
  elem = document.getElementById("elemEnemyContainer");
  elem.innerHTML = "";
  for (i=0; i<arrEnemy.length; i++) { //For loop to go through creations
    if (arrEnemy[i] != null) {
      elem.innerHTML += arrEnemy[i].createCard();
    }//If
  }// For

  intPreviousChoice = intArrayIndex; //Everything done so current choice now Previous choice



  arrFriendly[0].storeOpponentID(arrEnemy, intArrayIndex);
//  arrEnemyChosen[intArrayIndex].storeOpponentID();
//  arrEnemy[intArrayIndex].storeOpponentID();


}// Function
