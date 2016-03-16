
function objectDisplayAllProperties(arrToDisplay) { // Iterates through and displays all Properties in an Object

  for (i=0; i<arrToDisplay.length; i++) { //For loop to go through creations
    arrToDisplay[i].displayProperties();
  }// For

}// Function


function objectReturnProperty(arrArray, intIndex, strProperty) { // Iterates through and displays all Properties in an Object

  return arrArray[intIndex].strProperty;

}// Function

function returnPropertyRandom(arrArray) { // Returns a Random Property from passed in Array

  var returnPropertyRandom = arrArray[Math.floor(Math.random() * arrArray.length)]; //Value to Return
  return returnPropertyRandom;

}// Function

function returnDOBRandom(intStart, intEnd) { // Returns a Random Property from passed in Array

  var datDOB = new Date(intStart.getTime() + Math.random() * intEnd.getTime() - intStart.getTime());
  //alert(datDOB.toUTCString());
  return datDOB;

}// Function
