import {User, UserPort} from 'user-domain'

const {Pool, Client} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'database',
    database: 'microservices',
    password: 'admin',
    port: 5432,
})
pool.query('SELECT NOW()', (err: any, res: any) => {
    console.log(err, res)
    pool.end()
})
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'database',
    password: 'admin',
    port: 5432,
})
client.connect()
client.query('SELECT NOW()', (err: any, res: any) => {
    console.log(err, res)
    client.end()
})

export class UserRepository implements UserPort {

    find_all(): User[] {
        throw new Error('Method not implemented.');
    }
    get_user(id: string): User {
        return new User("3cef3028-16c3-475b-9ac2-fca78960048e ", "Bruce", "Wayne", new Date(1978, 3, 17))
    }
    create_user(user: User): string {
        throw new Error('Method not implemented.');
    }
    update_user(id: string, user: User): string {
        throw new Error('Method not implemented.');
    }
    delete_user(id: string): void {
        throw new Error('Method not implemented.');
    }

}
