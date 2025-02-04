const person = {
    name: "Eugene",
    age: 34,
    contact: {
        email: "test@test.com",
        phone: "+11111111111"
    },
    hobbies: ["Games", "Read", "Travel"],
    introduce() {
        console.log(`Hello, my name is ${this.name}, i am ${this.age} years old.`);
        console.log(`My hobbies: ${this.hobbies.join(", ")}`);
    }
};


person.introduce();
