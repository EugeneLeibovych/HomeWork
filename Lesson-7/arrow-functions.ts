const sumArray = (arr: unknown[]): number =>
    arr.reduce((sum: number, current: unknown) => sum + (isNaN(Number(current)) ? 0 : Number(current)), 0);

const numbersArray: number[] = [1, 2, 3, 4, 5];
const stringsArray: (number | string)[] = ['6', '7', '8', 'test', 'func'];

console.log('Sum num array:', sumArray(numbersArray));
console.log('Sum string array:', sumArray(stringsArray));
