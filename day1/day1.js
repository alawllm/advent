const { data } = require("./inputData");

//calibration document
//sum of the first and last digit

let mapObj = {
  oneight: "18",
  twone: "21",
  threeight: "38",
  fiveight: "58",
  sevenine: "79",
  eightwo: "82",
  eighthree: "83",
  nineight: "98",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
//data - array of strings
//.replace - can work on a string not on array
let replaced = [];
for (let i = 0; i < data.length; i++) {
  replaced.push(
    data[i].replace(
      /oneight|twone|threeight|fiveight|sevenine|eightwo|eighthree|nineight|one|two|three|four|five|six|seven|eight|nine/gi,
      function (matched) {
        return mapObj[matched];
      }
    )
  );
}
//find and sum first and last digit
//add to sum
//for loop over the array
let sum = 0;

//replaced - array of strings
for (let i = 0; i < replaced.length; i++) {
  //match data to the digits
  let matched = replaced[i].match(/\d/g);
  let firstDigit = matched[0];
  let lastDigit = matched[matched.length - 1];
  let digitsSum = Number(firstDigit + lastDigit);
  console.log(
    data[i],
    replaced[i],
    matched,
    sum,
    firstDigit,
    lastDigit,
    digitsSum
  );
  sum = sum + digitsSum;
}
console.log(sum);
//1227p5

// const str = '1227p5'
//   //match data to the digits
//   const matchedArray = [...str.matchAll(/\d/g)[0]];
//   let firstDigit = matchedArray[0];
//   let lastDigit = matchedArray[matchedArray.length - 1];
//   let digitsSum = Number(firstDigit + lastDigit);
//    console.log(matchedArray, firstDigit, lastDigit, digitsSum)
