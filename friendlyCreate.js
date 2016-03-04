var arrFriendly = new Array(); //Global Array to store all Friendlys


function friendlyCreateRandom(intNoOfFriendlys) {

  for (var i=0; i<intNoOfFriendlys; i++) { //For loop to go through creations

    var objFriendly = Object.create(objCharacter); //Create new object using objCharacter definition; Create new loop so is a unique object
        objFriendly.setValues(i
                          ,document.getElementById("elemNewGameName").value
                          ,returnDOBRandom(new Date(1979, 0, 1), new Date(1980, 0, 1))
                          ); //DOB = YYYY-MM-DD

    arrFriendly.push(objFriendly); //Write Object to Array

    var x = document.getElementById("elemFriendly");
        x.innerHTML = objFriendly.createCardChosen();
        x.style.visibility = "visible";

  }// For

}// Function
