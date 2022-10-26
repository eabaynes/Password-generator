const generateBtn = document.querySelector("#generate");

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// minimum characters 8, max 128.
// select length and what type of characters to include
// do so in  a series of prompts. at least 1 character type must be chosen
// display generated password in alert or written to the page (in the box)
function generatePassword() {
  // TODO: if users enter a value  between 8 and 128, say hi
let lengthNum = Number(prompt('How long do you want your password?'));

if (lengthNum<129 && lengthNum>7) {
  console.log("hi")
} else { 
  return "Error: Password must be Between 8 and 128 Characters"
}

}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// when clicked, pop prompt for input value
// input must be between 8 and 128
// if too short or long, return error message
// when valid number is entered
// pop up asking Y/N for lower case
// if yes, concat lower case
// if no, omit
// pop up asking Y/N for nums
// if yes, concat nums
// if no, omit
// pop up asking Y/N for specChar
// if yes, concat specChar
// if no, omit
// pop up asking Y/N for upper case
// if yes, concat upper case
// if no, omit
// pull random array values based on Y/N to concat
// ouput concat(ed) password in text box