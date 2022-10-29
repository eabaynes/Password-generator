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

function randomArr(passwordArray) {
  return passwordArray[Math.floor(Math.random() * passwordArray.length)];
}
// minimum characters 8, max 128.
// select length and what type of characters to include
// do so in  a series of prompts. at least 1 character type must be chosen
// display generated password in alert or written to the page (in the box)
function generatePassword() {
  // TODO: 
let passwordArray = [];
let password= '';

let lengthNum = Number(prompt('How long do you want your password?'));

if (lengthNum<129 && lengthNum>7) {
  const lowerCase = confirm("Use lowercase letters in password?")
  const upperCase = confirm("Use uppercase letters in password?")
  const nums = confirm("Use numbers in password?")
  const specChar = confirm("Use special characters in password?")

if (lowerCase === true){
  // if yes, add lowercase to password array (using copyOf?)
  passwordArray.push(lowerCasedCharacters);
};

if (upperCase === true) {
  // if yes, add uppercase to password array
  passwordArray.push(upperCasedCharacters)
};

if (nums === true) {
  // if yes, add numbers to password array
  passwordArray.push(numericCharacters)
};

if (specChar === true) {
  // if yes, add special characters to password array
  passwordArray.push(specialCharacters)
};

console.log(passwordArray)

console.log(randomArr(passwordArray))

console.log(randomArr(randomArr(passwordArray)))

for (i=0; i<passwordArray.length; i++) {
  password += randomArr(passwordArray[i])
}

for( let i=0; i<lengthNum; i++) {
  password += randomArr(randomArr(passwordArray))
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const shufflePassword = shuffle(Array.from(password));

return shufflePassword.join('');

// to generate final password:
// go in to index 0 in passwordArray
// pull one random index value
// go in to index 1 in passwordArray
// pull one randon value
// pull random from index 2
// pull random from index 3
// repeat until lengthNum is reached
// concat values retrieved into 
// shuffle
// return password

if (lowerCase === false && upperCase === false && nums === false && specChar === false) {
  return "Error: Select at least 1 character type"
}

} if (lengthNum>=129 || lengthNum<=7) { 
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
 