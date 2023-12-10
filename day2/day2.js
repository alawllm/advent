const { inputData } = require("./inputData");

//input data - array of strings
//inputData[i] - moving on the indexes

const maxes = {
  red: 12,
  green: 13,
  blue: 14,
};

function splitString(start) {
  //string.split returns an array
  const splittedInput = start.split(":");
  //dividing game number and game text
  const gameNr = splittedInput[0];
  const gameText = splittedInput[1];

  const splittedText = gameText.split(";");
  const splittedComa = splittedText.toString().replaceAll(",", "").split(",");
  const splittedSpace = splittedComa.toString().trim().split(" ");
  return { gameNr, splittedSpace };
}

//takes in string, returns false if the string is invalid
function checkIfValidLine(string) {
  for (let i = 0; i < string.length; i += 2) {
    if (maxes[string[i + 1]] < string[i]) {
      return false;
    }
  }
  return true;
}

function extractGameValue(start) {
  const { gameNr, splittedSpace } = splitString(start);
  let gameDigit = parseInt(gameNr, 10);
  console.log(gameDigit);

  if (checkIfValidLine(splittedSpace)) {
    console.log("valid");
    return Math.abs(gameDigit);
  } else if (!checkIfValidLine(splittedSpace)) {
    console.log("invalid");
    return 0;
  }
}

function calculateSumFromIds(inputData) {
  let sum = 0;
  for (let i = 0; i < inputData.length; i++) {
    sum += extractGameValue(inputData[i]);
    console.log("sum", sum);
  }
  return sum;
}

console.log(calculateSumFromIds(inputData));
