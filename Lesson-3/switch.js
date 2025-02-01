const age = 25;
const isStudent = true;
const hasJob = true;


let category;
if (age < 18) {
    category = "school";
} else if (isStudent && !hasJob) {
    category = "student_no_job";
} else if (isStudent && hasJob) {
    category = "student_with_job";
} else if (!isStudent && hasJob) {
    category = "worker";
} else {
    category = "unemployed";
}

switch (category) {
    case "school":
        console.log("Ви ще школяр");
        break;
    case "student_no_job":
        console.log("Ви студент без роботи");
        break;
    case "student_with_job":
        console.log("Ви студент і працюєте");
        break;
    case "worker":
        console.log("Ви не студент і працюєте");
        break;
    default:
        console.log("Ви не студент і не працюєте");
}

if (age >= 18) {
    switch (isStudent) {
        case true:
            console.log("Ви повнолітній студент");
            break;
        case false:
            console.log("Ви повнолітній і не студент");
            break;
    }
} else {
    console.log("Ви ще неповнолітній");
}
