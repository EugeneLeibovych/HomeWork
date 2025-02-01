let age = 25;
let isStudent = true;
let hasJob = true;

if (age >= 18) {
    console.log("Ви повнолітній");
}

age=12;

console.log (age < 18 ? "Ви неповнолітній": "Ви дорослий");


if (age < 18) {
    console.log("Ви ще школяр");
} else if (isStudent && !hasJob) {
    console.log("Ви студент без роботи");
} else if (isStudent && hasJob) {
    console.log("Ви студент і працюєте");
} else if (!isStudent && hasJob) {
    console.log("Ви не студент і працюєте");
} else {
    console.log("Ви не студент і не працюєте");
}



if (age >= 18) {
    if (isStudent) {
        console.log("Ви повнолітній студент");
    } else {
        console.log("Ви повнолітній і не студент");
    }
} else {
    console.log("Ви ще неповнолітній");
}

age=12;