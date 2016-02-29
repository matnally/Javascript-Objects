
var objCharacter = new Object(); //Main object creation

    objCharacter = { //Assign functions to object
        setValues: function (intID
                            ,strTitle
                            ,strFirstname
                            ,strSecondname
                            ,strDOB
                            ,strGender
        ) { //Set Object Property values
            this.id = intID;
            this.title = strTitle;
            this.firstname = strFirstname;
            this.secondname = strSecondname;
            this.fullname = (this.title + " " + this.firstname + " " + this.secondname);
            this.DOB = strDOB; //YYYY-MM-DD
            this.age = this.getAgeFromDOB(strDOB);
            this.gender = strGender;

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

            var x = document.getElementById("elemEnemy");
                x.innerHTML += strTemp;

        }
        ,createCard: function () { //Displays all Properties in Object

            var strTemp = "";

            strTemp += '<div id="'+this.id+'" class="characterCard">';
            strTemp += '<h3>'+this.fullname+'</h3>';
            strTemp += '<label for="'+this.id+'-id">ID: </label><input id="'+this.id+'-id" type="text" value="'+this.id+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-title">Title: </label><input id="'+this.id+'-title" type="text" value="'+this.title+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-firstName">First Name: </label><input id="'+this.id+'-firstName" type="text" value="'+this.firstname+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-secondName">Second Name: </label><input id="'+this.id+'-secondName" type="text" value="'+this.secondname+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-dob">Date of Birth: </label><input id="'+this.id+'-dob" type="text" value="'+this.DOB+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-age">Age (years): </label><input id="'+this.id+'-age" type="text" value="'+this.age+'">';
            strTemp += '<br>';
            strTemp += '<label for="'+this.id+'-gender">Gender: </label><input id="'+this.id+'-gender" type="text" value="'+this.gender+'">';
            strTemp += '<br>';
            strTemp += '</div>';


            var x = document.getElementById("elemEnemy");
                x.innerHTML += strTemp;

        }
    };
