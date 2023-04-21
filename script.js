// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var includeLowercase;
var includeUppercase;
var includeNumeric;
var includeSpecial;
// Arrays of characters to use for password generation
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Function to prompt user for password criteria and validate input
function getPasswordCriteria() {
  passwordLength = parseInt(
    prompt(
      "How many characters would you like your password to contain? (Choose a number between 8 and 128)"
    )
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    getPasswordCriteria();
  } else {
    includeLowercase = confirm(
      "Click OK to confirm including lowercase characters."
    );
    includeUppercase = confirm(
      "Click OK to confirm including uppercase characters."
    );
    includeNumeric = confirm(
      "Click OK to confirm including numeric characters."
    );
    includeSpecial = confirm(
      "Click OK to confirm including special characters."
    );
    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumeric &&
      !includeSpecial
    ) {
      alert("Please select at least one character type.");
      getPasswordCriteria();
    }
  }
}

// Function to generate password based on selected criteria
function generatePassword() {
  getPasswordCriteria();
  var availableChars = "";
  var generatedPassword = "";
  if (includeLowercase) {
    availableChars += lowercaseChars;
    generatedPassword += lowercaseChars.charAt(
      Math.floor(Math.random() * lowercaseChars.length)
    );
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
    generatedPassword += uppercaseChars.charAt(
      Math.floor(Math.random() * uppercaseChars.length)
    );
  }
  if (includeNumeric) {
    availableChars += numericChars;
    generatedPassword += numericChars.charAt(
      Math.floor(Math.random() * numericChars.length)
    );
  }
  if (includeSpecial) {
    availableChars += specialChars;
    generatedPassword += specialChars.charAt(
      Math.floor(Math.random() * specialChars.length)
    );
  }
  for (var i = generatedPassword.length; i < passwordLength; i++) {
    generatedPassword += availableChars.charAt(
      Math.floor(Math.random() * availableChars.length)
    );
  }
  return generatedPassword;
}
// Function to write password to the #password input

// Event listener to generate password on button click

// Add event listener to generate button
