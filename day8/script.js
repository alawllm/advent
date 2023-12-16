const { input, directions } = require("./input");

//const directions = `LR`;
const mappedDirections = directions
  .split("")
  .map((char) => (char === "L" ? 0 : 1));

// const input = `AAA = (BBB, CCC)
// BBB = (DDD, EEE)
// CCC = (ZZZ, GGG)
// DDD = (DDD, DDD)
// EEE = (EEE, EEE)
// GGG = (GGG, GGG)
// ZZZ = (ZZZ, ZZZ)`;

const mappedInput = input
  .split("\n")
  .map((line) => line.split(" = "))
  .reduce((acc, [key, value]) => {
    acc[key] = value.match(/\((.*)\)/)[1].split(", ");
    return acc;
  }, {});

function findPath(mappedDirections, mappedInput) {
  let firstKey = "AAA";
  let currentKey = firstKey;
  let counter = 0;

  //continue the loop until the current key is ZZZ
  while (currentKey !== "ZZZ") {
    for (let direction of mappedDirections) {
      const nextKey = mappedInput[currentKey][direction];
      currentKey = nextKey;
      counter++;
      if (currentKey === "ZZZ") {
        break;
      }
    }
  }
  return counter;
}

console.log(findPath(mappedDirections, mappedInput));
