import { fetchUsers, UserSummary, User } from './fetch-data';
import { Employee } from './abstraction';

async function main(): Promise<void> {
    try {
        const users: User[] = await fetchUsers();


        const userSummaries = users.map(user => new UserSummary(user));


        userSummaries.forEach(summary => {
            console.log(`ID: ${summary.id}, Name: ${summary.name}, City: ${summary.city}, Company: ${summary.companyName}`);
        });

        const employee = new Employee('Eugene Yevhen', 'Lviv', 'QA');
        console.log(employee.getDetails());
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
