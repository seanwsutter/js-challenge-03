// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength;
var confirmUppercase;
var confirmLowercase;
// // make libraries to randomize?
// var lowercase = ["a", "b", "c"]
// var upperCase = ["A", "B", "C"]
// var numbers = [1, 2, 3]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("testing..");

function generatePassword() {
  pwLength = prompt("Password length, choose minimum 8 characters maximum 128 characters");
  console.log(pwLength); // check 

  if (!pwLength) {
    alert("Required value");
  } else if (pwLength < 8 || pwLength > 128) { // if checks to make sure its min 8 max 128
    pwLength = prompt("you muust choose between 8 & 128");
    console.log(pwLength);


  }
  else {
    confirmLowercase = confirm("password contain lowercase?")
    console.log("has lowercase:", confirmLowercase);
    confirmUppercase = confirm("password cotain uppercase?")
    console.log("has uppercase:", confirmUppercase);
    confirmNumbers = confirm("password will contain numbers?")
    console.log("has numbers:", confirmNumbers);
  }
}

//all true
if (confirmLowercase === true && confirmUppercase === true && confirmNumbers === true) {
  console.log("all true");
}
// where is this stored, how to use

// else {
//   confirmUppercase=confirm("uppercase>")
// }
// var passwordGenT = [pwLength, confirmLowercase, confirmUppercase]
// var passwordGen = {
//   pwLength,
//   confirmLowercase,
//   confirmUppercase,
// }