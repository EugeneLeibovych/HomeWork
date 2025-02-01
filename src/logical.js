const num1 = 10;
const num2 = 5;
const str1 = "10";
const str2 = "Hello";
const bool1 = true;
const bool2 = false;
const nullValue = null;
const undefinedValue = undefined;
const obj1 = { key: "value" };
const obj2 = { key: "value" };
const symbol1 = Symbol("sym");
const symbol2 = Symbol("sym");

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
