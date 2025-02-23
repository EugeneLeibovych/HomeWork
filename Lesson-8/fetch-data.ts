export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export class UserSummary {
    public id: number;
    public name: string;
    public city: string;
    public companyName: string;

    public constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.city = user.address.city;
        this.companyName = user.company.name;
    }
}
