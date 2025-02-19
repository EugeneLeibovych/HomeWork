function sumArrayFunction(arr: unknown[]): number {
    return arr.reduce((sum: number, current: unknown) => {
        return sum + (isNaN(Number(current)) ? 0 : Number(current));
    }, 0);
}

const numbersArrayFunction: number[] = [1, 2, 3, 4, 5];
const stringsArrayFunction: (number | string)[] = ['6', '7', '8', 'test', 'func'];

console.log('Sum num array:', sumArrayFunction(numbersArrayFunction));
console.log('Sum string array:', sumArrayFunction(stringsArrayFunction));
