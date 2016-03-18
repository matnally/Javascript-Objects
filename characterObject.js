
/**************************************************************/
/***************** START Main object creation *****************/
/**************************************************************/

var objCharacter = new Object();

    objCharacter = { //Assign functions to object
        setValues: function (intID, strFullname) { //Set Object Property values

            this.id = intID;

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

function createCharacter(arrArray, intCharacters) { //Create new object using objCharacter definition; Create new loop so is a unique object

  for (var i=0; i<intCharacters; i++) { //For loop to go through creations

    var objCharacterInstance = Object.create(objCharacter); //Create Object
        objCharacterInstance.setValues(i, returnPropertyRandom(arrFullname, arrArray)); //Init

    arrArray.push(objCharacterInstance); //Write Object to Array

  }// For

  return arrArray;

}// Function

function createCharacterCard(arrArray) { //Create HTML for the Character card

  var strTemp = "";

  for (var i=0; i<arrArray.length; i++) { //For loop to go through creations

    strTemp += '<div id="'+arrArray[i].id+'" class="characterCard" onClick="characterChoose('+i+', '+arrArray[i].id+')">';
    strTemp += '<h3>'+arrArray[i].fullname+'</h3>';
//    strTemp += '<img id="'+arrArray[i].id+'-image" class="characterImage" src="1.png" alt="'+arrArray[i].fullname+'">';
    strTemp += '<label for="'+arrArray[i].id+'-attack">Attack: </label><label id="'+arrArray[i].id+'-attack">'+arrArray[i].attack+'</label>';
    strTemp += '<br>';
    strTemp += '<label for="'+arrArray[i].id+'-defense">Defense: </label><label id="'+arrArray[i].id+'-defense">'+arrArray[i].defense+'</label>';
    strTemp += '<br>';
    strTemp += '<label for="'+arrArray[i].id+'-speed">Speed: </label><label id="'+arrArray[i].id+'-speed">'+arrArray[i].speed+'</label>';
    strTemp += '</div>';

  }// For

  return strTemp;

}

function characterChoose(intIndex, intArrayIndex) {
  alert("You have chosen - intIndex: " + intIndex + " intArrayIndex: " + intArrayIndex);
}// Function
