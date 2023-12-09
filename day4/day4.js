const inputData =
  `Card   1: 95 57 30 62 11  5  9  3 72 87 | 94 72 74 98 23 57 62 14 30  3 73 49 80 96 20 60 17 35 11 63 87  9  6  5 95
Card   2: 65 16 99  4 48 52 84  7 26 12 | 86  7 71 12 52  4 84 15 48 20 16  3 10 87 56 99 26 66 88 65 98 32 14 51 59
Card   3: 19 70  1 34 10 79 23 58 64 68 | 95 14 64 53 19 63 83 46 77 75  3 12 70 65 22 13 66 34 23 89 94 50 69 79 68
Card   4: 27 57 62  6 53 68 97 35 23  8 | 23  2 81 62 19  8 65 27 93 53 57 67  6 91 68 97 16 30 12 96 15 35 25 55 43
Card   5: 49 95 30 21 42 63 92 97 89 93 | 35 34 46 89 93 29 42 21 63 49 77 30 95 27 28 62 72 32 97 54 75 56  4 58 92`.split(
    "\n"
  );

const firstString = inputData[0];

function splitString(string) {
  const splittedCard = string.split(":");
  const cardNr = splittedCard[0].match(/\d/g);
  return { cardNr, splittedCard };
}

const { cardNr, splittedCard } = splitString(firstString);
console.log(typeof cardNr);
console.log(splitString(firstString));
