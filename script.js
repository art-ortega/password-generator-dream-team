// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength
var upperCase
var numeric
var symbol
const ask = () =>{
    passwordLength = prompt ("How many characters do need in your password? (please enter a number between 8 and 128)")
}

const generatePassword = () =>{
    ask()
    if (passwordLength < 8 || passwordLength > 128) {
        generatePassword()
    } else {
    upperCase = confirm ("Do you want uppercase letters in your password?")
    numeric = confirm ("Do you want to include numbers in your password?")
    symbol = confirm ("Do you want to include symbols in your password?")
    }
    return passwordGenerator(passwordLength, upperCase, numeric, symbol)

}

const passwordGenerator = (length, upper, num, sym) => {
        let arr1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        let arr2 = arr1.map(value => value.toUpperCase())
        // console.log(arr2);
        let arr3 = [1,2,3,4,5,6,7,8,9,0]
        let arr4 = ["!","@","#","$","%","^","&","*","(",")"]
        let pwArr = arr1
        let finalArr = []
        if(upper) {
            pwArr = pwArr.concat(arr2)
        }
        if(num) {
            pwArr = pwArr.concat(arr3)
        }
        if(sym) {
            pwArr = pwArr.concat(arr4)
        }
        for(let i = 0; i < length; i++){
            let randomIndex = Math.floor(Math.random()* pwArr.length)
            finalArr.push(pwArr[randomIndex])
            }
        return finalArr.join("")


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
