
var objCharacter = new Object(); //Main object creation

    objCharacter = { //Assign functions to object
        setValues: function (intID
                            ,strFullname
                            ,strDOB
        ) { //Set Object Property values
            this.id = intID;

            this.fullname = strFullname;

            this.DOB = strDOB; //YYYY-MM-DD
            this.age = this.getAgeFromDOB(strDOB);

            this.attack = this.setAttribute(document.getElementById("elemDifficulty").value, 1, 10);
            this.defense = this.setAttribute(document.getElementById("elemDifficulty").value, 1, 10);
            this.speed = this.setAttribute(document.getElementById("elemDifficulty").value, 1, 10);

            this.items = 0;

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
        ,getAgeFromDOB: function (strDOB) { //Return age determined from date of birth

            var datDOB = new Date(strDOB); //YYYY-MM-DD
            return ~~((Date.now() - datDOB) / (31557600000));
        }
        ,displayProperties: function () { //Displays all Properties in Object

            var strTemp = "";

            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    strTemp += key + " : " + this[key];
                    strTemp += "<br>";
                }
            }

            strTemp += "<br>";

            var x = document.getElementById("elemEnemyContainer");
                x.innerHTML += strTemp;

        }
        ,createCard: function () { //Displays all Properties in Object

            var strTemp = "";

            strTemp += '<div id="'+this.id+'" class="characterCard" onClick="chooseEnemy('+this.id+');">';
            strTemp += '<h3>'+this.fullname+'</h3>';
            strTemp += '<label for="'+this.id+'-id">ID: </label><input id="'+this.id+'-id" type="text" value="'+this.id+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-fullName">Full Name: </label><input id="'+this.id+'-fullName" type="text" value="'+this.fullname+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-dob">Date of Birth: </label><input id="'+this.id+'-dob" type="text" value="'+this.DOB+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-age">Age (years): </label><input id="'+this.id+'-age" type="text" value="'+this.age+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-attack">Attack: </label><input id="'+this.id+'-attack" type="text" value="'+this.attack+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-defense">Defense: </label><input id="'+this.id+'-defense" type="text" value="'+this.defense+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-speed">Speed: </label><input id="'+this.id+'-speed" type="text" value="'+this.speed+'">';
            strTemp += '<br>';
            strTemp += '</div>';

            return strTemp;

        }
    };
