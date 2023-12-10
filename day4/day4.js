const { inputData } = require("./inputData");

function splitString(string) {
  const splittedCard = string.split(":");
  const allNumbers = splittedCard[1];
  const { winningNumbers, currentGameNumbers } =
    sanitizeInputNumbers(allNumbers);

  //number, array, array
  return { winningNumbers, currentGameNumbers };
}

function sanitizeInputNumbers(stringOfNumbers) {
  const splittedGames = stringOfNumbers.split("|");

  const winningNumbersString = splittedGames[0].trim().replace(/\s+/g, " ");
  const winningNumbers = winningNumbersString
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const currentGameString = splittedGames[1].trim().replace(/\s+/g, " ");
  const currentGameSet = new Set(
    currentGameString
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  );
  const currentGameNumbers = Array.from(currentGameSet);
  console.log(currentGameNumbers);
  return { winningNumbers, currentGameNumbers };
}

function calculateOutcome(repeatsCount) {
  if (repeatsCount === 0) {
    return 0;
  }
  let outcome = 1;
  for (let i = 1; i < repeatsCount; i++) {
    outcome *= 2;
  }
  return outcome;
}

//compare numbers, if winningNumbers[i] === currentNumbers[i], sum++
function compareNums(winningNumbers, currentGameNumbers) {
  let repeatsCount = 0;
  for (let i = 0; i < winningNumbers.length; i++) {
    for (let j = 0; j < currentGameNumbers.length; j++) {
      if (+winningNumbers[i] === +currentGameNumbers[j]) {
        repeatsCount += 1;
      }
    }
  }
  console.log("repeats count", repeatsCount);
  return repeatsCount;
}

function calculateGameOutcome(inputData) {
  let wholeGameOutcome = 0;
  for (let i = 0; i < inputData.length; i++) {
    const currentString = inputData[i];
    const { winningNumbers, currentGameNumbers } = splitString(currentString);
    const repeats = compareNums(winningNumbers, currentGameNumbers);
    wholeGameOutcome += calculateOutcome(repeats);
  }
  console.log("whole game outcome", wholeGameOutcome);
  return wholeGameOutcome;
}
calculateGameOutcome(inputData);
