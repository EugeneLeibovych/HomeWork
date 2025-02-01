let age = 25;
let isStudent = true;
const hasJob = true;


switch (true) {
    case (age < 18):
        console.log("Ви ще школяр");
        break;
    case (isStudent && !hasJob):
        console.log("Ви студент без роботи");
        break;
    case (isStudent && hasJob):
        console.log("Ви студент і працюєте");
        break;
    case (!isStudent && hasJob):
        console.log("Ви працюєте і не навчаєтесь");
        break;
    default:
        console.log("Ви не студент і не працюєте");
        break;
}

age = 19; // Для перевірки case 2
isStudent = false; // Для перевірки case 2

switch (true) {
    case (age >= 18 && isStudent):
        console.log("Ви повнолітній студент");
        break;
    case (age >= 18 && !isStudent):
        console.log("Ви повнолітній і не студент");
        break;
    default:
        console.log("Ви ще неповнолітній");
        break;
}
