const stringArray = ["apple", "banana", "cherry", "avocado"];
console.log("Filter:", stringArray.filter(str => str.startsWith("a")));
console.log("Find:", stringArray.find(str => str.includes("e")));
console.log("Sort:", [...stringArray].sort());
console.log("Concat:", stringArray.concat(["mango", "peach"]));
console.log("Includes:", stringArray.includes("banana"));
console.log("Join:", stringArray.join(", "));
stringArray.forEach(str => console.log("ForEach:", str.toUpperCase()));
console.log("Map:", stringArray.map(str => str + "apple"));

const numberArray = [3, 1, 4, 2, 5];
console.log("Filter:", numberArray.filter(num => num > 2));
console.log("Find:", numberArray.find(num => num % 2 === 0));
console.log("Sort:", [...numberArray].sort((a, b) => a - b));
console.log("Concat:", numberArray.concat([10, 20]));
console.log("Includes:", numberArray.includes(4));
console.log("Join:", numberArray.join(" - "));
numberArray.forEach(num => console.log("ForEach:", num * 2));
console.log("Map:", numberArray.map(num => num ** 2));

const booleanArray = [true, false, true, false];
console.log("Filter:", booleanArray.filter(bool => bool));
console.log("Find:", booleanArray.find(bool => bool));
console.log("Sort:", [...booleanArray].sort((a, b) => b - a));
console.log("Concat:", booleanArray.concat([false, true]));
console.log("Includes:", booleanArray.includes(false));
console.log("Join:", booleanArray.join(" | "));
booleanArray.forEach(bool => console.log("ForEach:", !bool));
console.log("Map:", booleanArray.map(bool => !bool));

const anyArray = [42, "hello", true, null, "world"];
console.log("Filter:", anyArray.filter(value => typeof value === "string"));
console.log("Find:", anyArray.find(value => typeof value === "number"));
console.log("Sort:", [...anyArray].sort());
console.log("Concat:", anyArray.concat(["new", 99]));
console.log("Includes:", anyArray.includes(null));
console.log("Join:", anyArray.join(" ~ "));
anyArray.forEach(value => console.log("ForEach:", typeof value));
console.log("Map:", anyArray.map(value => String(value)));
