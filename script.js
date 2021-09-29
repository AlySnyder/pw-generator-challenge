
// I created multiple variables here in order to use them later on in the document. 
function generatePassword() {
  var maxLength = 128;
  var minLength = 8;
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var password = "";
  
  // I made a variable called "charactertypes" that represents the variables in my function of generate password, 
  // so that i could use them below as a group of "charactertypes"
  var characterTypes = []

  // I used passwordlength to prompt the user on how long they would like their password to be. if they chose the wrong parameters, 
  // I would set their password automatically to meet standards. 
 var passwordLength = window.prompt("how long should the password be? (pick a number between 8 and 128)")
  if (passwordLength < minLength) {
      passwordLength = minLength
  }

  if (passwordLength > maxLength) {
      passwordLength = maxLength
 }
 // I used the variable "promptpassword" to meet the acceptance criteria, and ask the user which charactertypes they want to include in their password. 
  var promptPassword = window.prompt("Would you like to use uppercase characters? Please select yes or no");
  if (promptPassword === "yes" || promptPassword === "Yes" || promptPassword === "YES") {
    characterTypes.push(upperCase)
  }

  var promptPassword = window.prompt("Would you like to use lowercase characters? Please select yes or no");
  if (promptPassword === "yes" || promptPassword === "Yes" || promptPassword === "YES") {
    characterTypes.push(lowerCase)
  }

  var promptPassword = window.prompt("Would you like to use numbers? Please select yes or no");
  if (promptPassword === "yes" || promptPassword === "Yes" || promptPassword === "YES") {
    characterTypes.push(numbers)
  }

  var promptPassword = window.prompt("Would you like to use special characters? Please select yes or no");
  if (promptPassword === "yes" || promptPassword === "Yes" || promptPassword === "YES") {
    characterTypes.push(specialCharacters)
  }
  // I kept my console logs for you to see my debugging :) 
  console.log(characterTypes)

  // I created a for loop using password length, and used the moad to make the password loop back in ascending order. 
  // I used charAt to pull a character from my character types. 
  for (let i = 0; i < passwordLength; i++) {
    var characterType = characterTypes[i % characterTypes.length] 
    console.log(i)
    console.log(characterType)
    var index = Math.floor(Math.random() * characterType.length)
    password += characterType.charAt(index)
    console.log(password)
  } 
  
  return password

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
