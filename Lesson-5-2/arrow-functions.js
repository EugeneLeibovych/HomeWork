
const sumArray = (arr) => arr.reduce((sum, current) => sum + (isNaN(current) ? 0 : Number(current)), 0);


const numbersArray = [1, 2, 3, 4, 5];
const stringsArray = ["6", "7", "8", "test", "func"];


console.log("Sum num array:", sumArray(numbersArray));
console.log("Sum string array:", sumArray(stringsArray));
