let num1 = 10;
let num2 = 5;
let str1 = "10";
let str2 = "Hello";
let bool1 = true;
let bool2 = false;
let nullValue = null;
let undefinedValue = undefined;
let obj1 = { key: "value" };
let obj2 = { key: "value" };
let symbol1 = Symbol("sym");
let symbol2 = Symbol("sym");

// Операції порівняння
console.log("Число == Рядок:", num1 == str1); // true (нестроге порівняння)
console.log("Число === Рядок:", num1 === str1); // false (строге порівняння)
console.log("Число > Число:", num1 > num2);
console.log("Число < Число:", num1 < num2);
console.log("Рядок == Рядок:", str1 == str2);
console.log("Булеве == Число:", bool1 == 1);
console.log("Булеве === Число:", bool1 === 1);
console.log("null == undefined:", nullValue == undefinedValue);
console.log("null === undefined:", nullValue === undefinedValue);
console.log("Об'єкт == Об'єкт:", obj1 == obj2);
console.log("Symbol == Symbol:", symbol1 == symbol2); 

// Логічні оператори
console.log("true && false:", bool1 && bool2);
console.log("true || false:", bool1 || bool2);
console.log("!true:", !bool1);
console.log("!false:", !bool2);
console.log("(Число > 5) && (Число < 15):", num1 > 5 && num1 < 15);
console.log("(Число < 5) || (Число > 15):", num1 < 5 || num1 > 15);
console.log("null || 'значення за замовчуванням':", nullValue || "значення за замовчуванням");