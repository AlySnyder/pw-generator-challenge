

function generatePassword() {
  var maxLength = 128;
  var minLength = 8;
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var password = "";
  
  var promptPassword = window.prompt("Would you like to use uppercase characters? Please select yes or no");
  if (promptPassword === "yes" || promptPassword === "Yes" || promptPassword === "YES") {
    password += upperCase
  }

  var promptPassword = window.prompt("Would you like to use lowercase characters? Please select yes or no");
  if (promptPassword === "yes" || promptPassword === "Yes" || promptPassword === "YES") {
    password += lowerCase
  }

  for (let i = 0; i < 2; i++) {
    var index = Math.floor(Math.random() * upperCase.length)
    password += upperCase.charAt(index)
  } 

  for (let i = 0; i < 2; i++) {
    var index = Math.floor(Math.random() * lowerCase.length)
    password += lowerCase.charAt(index)
  } 

  for (let i = 0; i < 2; i++) {
    var index = Math.floor(Math.random() * numbers.length)
    password += numbers.charAt(index)
  } 

  for (let i = 0; i < 2; i++) {
    var index = Math.floor(Math.random() * specialCharacters.length)
    password += specialCharacters.charAt(index)
  } 

 // math = object math.floor is a methd of the math object
  // concat = add strings together. a,b,c, (then add other arrays, user needs to be able to enter a number and make it that length at least 8 and max 128)
// reusable code 
// get an element out of the array - charAt 


  return password
  //return is a keyword the fuction will output that value, if you wrap in parenthesis youre not doing anything. 
  // can give functions certain parameters - code that we want to call at a certiain time
  // objects - data type "first name" "last name"
  // function stored in an object = method


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//query selector is a function and takes 1 input ^ this string becomes a variable to that function. 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
