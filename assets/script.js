// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength;
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecials;
var userOptions;
// // make libraries to randomize?
// var lowercase = ["a", "b", "c"]
// var upperCase = ["A", "B", "C"]
// var numbers = [1, 2, 3]

var lowercaseLib = ["a", "b", "c"]
var uppercaseLib = ["A", "B", "C"]
var numbersLib = [1, 2, 3]
var specialsLib = ["!", "@", "#"]
// var specialsLib = [!, @, #]


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
  pwLength = prompt("Password length? choose minimum 8 characters maximum 128 characters");
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
    confirmSpecials = confirm("password contains special characters?")
    console.log("has special characters:", confirmSpecials);
  };

  // if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecials === false) {
  //   userOptions = prompt("please select criteria to generate password")}
  // pw length?

  if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecials) {// if all are false
    userOptions = prompt("please select criteria to generate password")
  } else if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecials) {

    // userOptions = [lowercaseLib, uppercaseLib, numbersLib, specialsLib]
    userOptions = lowercaseLib.concat(uppercaseLib, numbersLib, specialsLib);

    console.log("criteria:", userOptions);


  };

  // console.log(userOptions);

  // var newPassword = "";
  var newPassword = [];


  for (var i = 0; i < pwLength; i++) {


    var criteria = userOptions[Math.floor(Math.random() * userOptions.length)];
    newPassword.push(criteria);
    console.log(criteria);


  }

  var password = newPassword.join("");
  console.log("new password:", password);
  return password;
}












// userOptions = {
//   lowercaseLib,
//   upperCaseLib,
//   numbersLib,
//   specialsLib
// }
//all true
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