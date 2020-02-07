// Assignment Code
var generateBtn = document.querySelector("#generate");
// function decleration ask that prompts user how many characters they want to include in their password
const ask = () =>{
    passwordLength = prompt ("How many characters do need in your password? (please enter a number between 8 and 128)")
}

const generatePassword = () =>{
    ask()
    //if characters selected dont range between 8-128, ask them again until condition is no longer met
    if (passwordLength < 8 || passwordLength > 128) {
        generatePassword()
    } else {
    // ask user if they want lowercase letters included in their password
    lowerCase = confirm ("Do you want lowercase letters in your password?")
    // ask user if they want to uppercase letters included in their password
    upperCase = confirm ("Do you want uppercase letters in your password?")
    // ask user if they want to include numbers in their password
    numeric = confirm ("Do you want to include numbers in your password?")
    // ask user if they want to include symbols in their password
    symbol = confirm ("Do you want to include symbols in your password?")
    }
    // returns the values to function generatePassword ex(10,true,true,false,true)
    return passwordGenerator(passwordLength, lowerCase, upperCase, numeric, symbol)

}

const passwordGenerator = (length, lower, upper, num, sym) => {
        //assign pool of characters in variable
        let strLowerCase = "qwertyuiopasdfghjklzxcvbnm"
        let strUpperCase = strLowerCase.toUpperCase();
        let strNumbers = "1234567890"
        let strSymbols = "!@#$%^&*(){}|[],."
        let pw = ""
        let strAll = ""
        //set characters used count to 0
        let charUsed = 0
        // if users wants lowercase run code
        if(lower) {
            //assigns pool of lowercase letters to strAll var
            strAll += strLowerCase
            // picks one random letter from lowercase pool and stores it in pw var
            pw += strLowerCase.charAt(Math.floor(Math.random()*strLowerCase.length))
            //increments charUsed by 1
            charUsed++
        }
        //if user wants uppercase letters run code
        if(upper) {
            //assigns pool of uppercase letters to strAll var
            strAll += strUpperCase
            // picks a random character from uppercase pool and stores to pw var
            pw += strUpperCase.charAt(Math.floor(Math.random()*strUpperCase.length))
            //increments charUsed by 1
            charUsed++
        }
        //if user wants numbers in pass run code
        if(num) {
            //assign pool of numbers to strAll var
            strAll += strNumbers
            // pick a random number from number pool and stores it in pw var
            pw += strNumbers.charAt(Math.floor(Math.random()*strNumbers.length))
            // incriments charused var by 1
            charUsed++
        }
        //if user wants symbols in their pass run code
        if(sym) {
            //assign pool of symbols to strAll var
            strAll += strSymbols
            //picks random character from symbol pool and stores it in pw var
            pw += strSymbols.charAt(Math.floor(Math.random()*strSymbols.length))
            // incriments charused count by 1
            charUsed++
        }
        // iterates through usercount - the current charUsed count to generate the rest of password
        for(let i = 0; i < length - charUsed; i++){
            //generates random index of strAll and stores it in pw var
            pw += strAll.charAt(Math.floor(Math.random()* strAll.length))
            }
            //returns shuffled password using our shuffle function
        return shuffle(pw)
}
// shuffle function 
const shuffle = (string) => {
    let array = string.split("")
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let tmp = array[i]
        array[i] = array[j]
        array[j] = tmp
    }
    return array.join("")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.select()

  passwordText.value = password;

}
const copyPass = () => {

    var copyText = password;
    copyText.select()
    document.execCommand('copy')
    alert("Copied the password")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
