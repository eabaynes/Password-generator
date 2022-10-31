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

// function to pull a random element from the password array
function randomArr(passwordArray) {
  return passwordArray[Math.floor(Math.random() * passwordArray.length)];
}

// function to generate password
function generatePassword() {

  // establish array to send chosen character arrays
let passwordArray = [];
// string to dump chosen characters
let password= '';

// establish variable for password length and determine value via user input
let lengthNum = Number(prompt('How long do you want your password?'));


// establish error return for password lengths that are not valid
} if (lengthNum>=129 || lengthNum<=7) { 
  return "Error: Password must be Between 8 and 128 Characters"
}

// establish valid password lenfth rules
if (lengthNum<129 && lengthNum>7) {
  // user input for which characters should be included in password
  const lowerCase = confirm("Use lowercase letters in password?")
  const upperCase = confirm("Use uppercase letters in password?")
  const nums = confirm("Use numbers in password?")
  const specChar = confirm("Use special characters in password?")

  // establish rules and return for invalid character type selection
  if (lowerCase === false && upperCase === false && nums === false && specChar === false) {
    return "Error: Select at least 1 character type"
  }

  // check booleans for which arrays to add to array of possible password characters

if (lowerCase === true){
  // if true, add lowercase to password array
  passwordArray.push(lowerCasedCharacters);
};

if (upperCase === true) {
  // if true, add uppercase to password array
  passwordArray.push(upperCasedCharacters)
};

if (nums === true) {
  // if true, add numbers to password array
  passwordArray.push(numericCharacters)
};

if (specChar === true) {
  // if true, add special characters to password array
  passwordArray.push(specialCharacters)
};

// add initial loop to ensure at least one of each chosen character type is added to password
for (i=0; i<passwordArray.length; i++) {
  // call to random element function, inputting specific password array index
  password += randomArr(passwordArray[i])
}

// for remaining password length, fun for loop to fill with random elements from any chosen character array
for( let i=0; i<lengthNum; i++) {
  // call to random element function twice- first to determine character type, then to grab random character element
  password += randomArr(randomArr(passwordArray))
}

// randomized function taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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

// create variable to convert and store the elements dumped into password as an array, and run the shuffle function on it 
const shufflePassword = shuffle(Array.from(password));

// return the shuffled password array to the screen as a joined string
return shufflePassword.join('');
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 