export abstract class Person {
    public name: string;
    public city: string;

    public constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
    }

    public abstract getDetails(): string;
}

export class Employee extends Person {
    public position: string;

    public constructor(name: string, city: string, position: string) {
        super(name, city);
        this.position = position;
    }

    public getDetails(): string {
        return `${this.name} work as ${this.position} in ${this.city}.`;
    }
}
