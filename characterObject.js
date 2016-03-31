
/**************************************************************/
/***************** START Main object creation *****************/
/**************************************************************/

var objCharacter = new Object();

    objCharacter = { //Assign functions to object
        setValues: function (intID, strFullname, strType) { //Set Object Property values

            this.id = intID;

            this.characterType = strType;

            this.fullname = strFullname;

            this.attack = this.setAttribute(document.getElementById("elemNewGameDifficulty").value, 1, 10);
            this.defense = this.setAttribute(document.getElementById("elemNewGameDifficulty").value, 1, 10);
            this.speed = this.setAttribute(document.getElementById("elemNewGameDifficulty").value, 1, 10);

        }
        ,setAttribute: function (strDifficulty, intMin, intMax) {

          var intAttribute = 0;
          var intMultiplier = 0;
          var intReturnValue = 0;

          switch (strDifficulty) {
            case "easy":
              intMultiplier = 2;
            break;
            case "normal":
              intMultiplier = 1;
            break;
            case "hard":
              intMultiplier = 0.5;
            break;
            default:
              intMultiplier = 1;
          }

          intAttribute = Math.floor(Math.random() * intMax) + intMin; //Get random numbers between two values
          intReturnValue = Math.round(intAttribute * intMultiplier);

          return intReturnValue;

        }
      };

/**************************************************************/
/****************** END Main object creation ******************/
/**************************************************************/

var arrFriendly = new Array(); //Global Array to store all Friendlys
var arrEnemy = new Array(); //Global Array to store all Enemies

function createCharacter(arrArray, intCharacters, strType) { //Create new object using objCharacter definition; Create new loop so is a unique object

  for (var i=0; i<intCharacters; i++) { //For loop to go through creations

    var objCharacterInstance = Object.create(objCharacter); //Create Object
        objCharacterInstance.setValues(i, returnPropertyRandom(arrFullname, arrArray), strType); //Init

    arrArray.push(objCharacterInstance); //Write Object to Array

  }// For

  return arrArray;

}// Function

function createCharacterCard(arrArray) { //Create HTML for the Character card

  var strTemp = "";

  for (var i=0; i<arrArray.length; i++) { //For loop to go through creations

    strTemp += '<div id="'+arrArray[i].id+'" class="characterCard" onClick="characterChoose(&quot;'+arrArray[i].characterType+'&quot;, '+i+')">';
    strTemp += '<h3>'+arrArray[i].fullname+'</h3>';
    strTemp += '<label for="'+arrArray[i].id+'-attack">Attack: </label><label id="'+arrArray[i].id+'-attack">'+arrArray[i].attack+'</label>';
    strTemp += '<br>';
    strTemp += '<label for="'+arrArray[i].id+'-defense">Defense: </label><label id="'+arrArray[i].id+'-defense">'+arrArray[i].defense+'</label>';
    strTemp += '<br>';
    strTemp += '<label for="'+arrArray[i].id+'-speed">Speed: </label><label id="'+arrArray[i].id+'-speed">'+arrArray[i].speed+'</label>';
    strTemp += '</div>';

  }// For

  return strTemp;

}


function characterChoose(strType, intArrayIndex) {
  //Can't pass array as createCharacterCard function returns string
  
  var arrChosen = new Array();

  if (elemFriendlyChosenContainer.innerHTML == "") {
    //Not chosen anything yet

    if (strType == "Friendly") {
      arrChosen.push(arrFriendly[intArrayIndex]);
      arrFriendly.splice(intArrayIndex,1);
      populateElement("elemFriendlyContainer", createCharacterCard(arrFriendly));
      populateElement("elemFriendlyChosenContainer", createCharacterCard(arrChosen));
      document.getElementById("elemFriendlyContainer").classList.add("greyedOut");
    }

  } //If

  if (elemEnemyChosenContainer.innerHTML == "") {
    //Not chosen anything yet

    if (strType == "Enemy") {
      arrChosen.push(arrEnemy[intArrayIndex]);
      arrEnemy.splice(intArrayIndex,1);
      populateElement("elemEnemyContainer", createCharacterCard(arrEnemy));
      populateElement("elemEnemyChosenContainer", createCharacterCard(arrChosen));
      document.getElementById("elemEnemyContainer").classList.add("greyedOut");
    }

  } //If

}// Function
