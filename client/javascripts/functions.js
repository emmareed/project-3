// jshint esversion: 7

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = (n) => {

   //your code goes here
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result = `${result}Not`;
  }
  return result;
};


let findAllbitBatBotOrNots1 = (arr) => {
   //your code goes here
   //use map method
   return arr.map(each => `${each}: `+bitBatBotOrNot(each))
};

console.log(findAllbitBatBotOrNots1([ 9, 10, 28, 30, 34,
105]))

let findAllbitBatBotOrNots2 = (arr) => {
  //your code goes here
  //use for statement
  let result = [];
  for(each in arr) {
    result.push(arr[each]+": "+bitBatBotOrNot(arr[each]))
  }
  return result;
};


let findAllbitBatBotOrNots3 = (arr) => {
   //your code goes here
   //use for..of statement
   let result = [];
   for(each of arr) {
     result.push(each+": "+bitBatBotOrNot(each))
   }
return result;
}

let findAllbitBatBotOrNots4 = (arr) => {
   //your code goes here
   //use forEach method
   let result = [];
   let ans = arr.forEach((number)=> {
     result.push(arr[number]+ ": " + bitBatBotOrNot(number));
     });
    return result;
};

//test the functions

console.log(findAllbitBatBotOrNots1(arrOf1To100))

console.log(findAllbitBatBotOrNots2(arrOf1To100))

console.log(findAllbitBatBotOrNots3(arrOf1To100))

console.log(findAllbitBatBotOrNots4(arrOf1To100))
