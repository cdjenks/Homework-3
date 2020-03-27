var passWord = ""

var masterArray=[
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
["0","1","2","3","4","5","6","7","8","9"],
["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
]

var groupIndex = 0

//Initial prompt to determine password length    
var pwLength=prompt("How long would you like your Password to be? \n( Must be between 8 characters and 128 characters)")
    
//Additional questions to establish the parameters for the password
var pwUppercase=confirm("Would you like your password to contain uppercase letters?")
var pwLowercase=confirm("Would you like your password to contain lowercase characters?")
var pwNumerals=confirm("Would you like your password to contain numerals")
var pwCharacters=confirm("Would you like your password to contain special characters?")


// Function to exclude the sub-arrays that were not requested by the user
function generateCharacter(excludeList){
    groupIndex = Math.floor(Math.random() * 4)
    while(excludeList.indexOf(groupIndex) >= 0){
        groupIndex = Math.floor(Math.random() * 4)
    }
    return masterArray[groupIndex][Math.floor(Math.random() * masterArray[groupIndex].length)];
}

//Function that creates password by looping until requested password length is reached
function createPassword() {
    while (passWord.length < pwLength) {
        
        if (pwUppercase === true && pwLowercase === true && pwNumerals === true && pwCharacters === true){
            passWord += generateCharacter([''])
        }
        else if (pwUppercase === true && pwLowercase === true && pwNumerals === true && pwCharacters === false){
            passWord += generateCharacter([3])
        }
        else if (pwUppercase === true && pwLowercase === true && pwNumerals === false && pwCharacters === true){
            passWord += generateCharacter([2])
        }
        else if (pwUppercase === true && pwLowercase === false && pwNumerals === true && pwCharacters === true){
            passWord += generateCharacter([1])
        }
        else if (pwUppercase === false && pwLowercase === true && pwNumerals === true && pwCharacters === true){
            passWord += generateCharacter([0])            
        }
        else if (pwUppercase === true && pwLowercase === true && pwNumerals === false && pwCharacters === false){
            passWord += generateCharacter([2, 3])           
        }
        else if (pwUppercase === true && pwLowercase === false && pwNumerals === false && pwCharacters === true){
            passWord += generateCharacter([1, 2])        
        }
        else if (pwUppercase === false && pwLowercase === false && pwNumerals === true && pwCharacters === true){
            passWord += generateCharacter([0, 1]) 
        }
        else if (pwUppercase === true && pwLowercase === false && pwNumerals === true && pwCharacters === false){
            passWord += generateCharacter([1, 3]) 
        }
        else if (pwUppercase === false && pwLowercase === true && pwNumerals === false && pwCharacters === true){
            passWord += generateCharacter([0, 2])
        }
        else if (pwUppercase === false && pwLowercase === true && pwNumerals === true && pwCharacters === false){
            passWord += generateCharacter([0, 3])      
        }
        else if (pwUppercase === false && pwLowercase === false && pwNumerals === false && pwCharacters === true){
            passWord += generateCharacter([0, 1, 2])    
        }
        else if (pwUppercase === false && pwLowercase === false && pwNumerals === true && pwCharacters === false){
            passWord += generateCharacter([0, 1, 3])        
        }
        else if (pwUppercase === false && pwLowercase === true && pwNumerals === false && pwCharacters === false){
            passWord += generateCharacter([0, 2, 3])
        }
        else if (pwUppercase === true && pwLowercase === false && pwNumerals === false && pwCharacters === false){
            passWord += generateCharacter([1, 2, 3])           
        }
        else {
            alert("You need to choose at least 1 character set")   
        }
    }

    document.getElementById("password").innerHTML = passWord;
  
}
        