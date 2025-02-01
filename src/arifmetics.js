const num1 = 10;
const num2 = 5;
const str1 = "20";
const str2 = "5";
const bool1 = true;
const bool2 = false;
const inf1 = Infinity;
const inf2 = -Infinity;
const nanValue = NaN;
const bigInt1 = BigInt(2 ** 53 - 1);
const bigInt3 = 123n;
const nullValue = null;
const undefinedValue = undefined;
const symbolValue = Symbol("sym");

// Арифметичні операції між числами
console.log("Сума чисел:", num1 + num2);
console.log("Різниця чисел:", num1 - num2);
console.log("Добуток чисел:", num1 * num2);
console.log("Ділення чисел:", num1 / num2);
console.log("Залишок від ділення:", num1 % num2);

// Арифметичні операції з Infinity та NaN
console.log("Сума з Infinity:", num1 + inf1);
console.log("Різниця з Infinity:", num1 - inf2);
console.log("Операція з NaN:", num1 + nanValue);

// Арифметичні операції з BigInt
console.log("BigInt + BigInt:", bigInt1 + bigInt3);
console.log("BigInt - BigInt:", bigInt1 - bigInt3);

// Арифметичні операції між рядками (конкатенація)
console.log("Конкатенація рядків:", str1 + str2);
console.log("Віднімання рядків:", str1 - str2);
console.log("Множення рядків:", str1 * str2);
console.log("Ділення рядків:", str1 / str2);

// Арифметичні операції між різними типами
console.log("Число + рядок:", num1 + str1);
console.log("Число - рядок:", num1 - str1);
console.log("Булеве + Число:", bool1 + num1);
console.log("Булеве - Число:", bool2 - num2);
console.log("Булеве * Рядок:", bool1 * str1);
console.log("Булеве + Рядок:", bool2 + str2);

// Використання null та undefined
console.log("Сума null та числа:", nullValue + num1);
console.log("Сума undefined та числа:", undefinedValue + num1);

// Використання символу
console.log("Тип символу:", typeof symbolValue);

// Приклад void-функції
function voidFunction() {
    console.log("Ця функція нічого не повертає");
}
voidFunction();
