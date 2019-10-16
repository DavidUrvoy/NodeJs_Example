import { Client } from 'pg'
import { User, UserPort } from 'user-domain'
import { v4 } from 'uuid'

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'microservices',
    password: 'admin',
    port: 5432,
})
client.connect()

export class UserRepository implements UserPort {

    find_all(): Promise<User[]> {
        return client.query(`SELECT * from users`)
            .then(({ rows: users }: { rows: User[] }) => users)
    }
    find(id: typeof v4): Promise<User> {
        return client.query(`SELECT * from users WHERE id = $1`, [id])
            .then(({ rows: user }: { rows: User[] }) => user[0])
    }
    create_user(user: User): Promise<typeof v4 | undefined> {
        return client.query(`INSERT into users (first_name, last_name, birth_date) VALUES ($1, $2, $3) RETURNING id`, [user.first_name, user.last_name, user.birth_date])
            .then(({ rows }: { rows: { id: typeof v4 | undefined }[] }) => { return rows[0].id })
    }
    update_user(id: typeof v4, user: User): void {
        client.query(`UPDATE users SET first_name = $1, last_name = $2, birth_date = $3 WHERE id = $4`,
            [user.first_name, user.last_name, user.birth_date, id])
    }
    delete_user(id: typeof v4): void {
        client.query(`DELETE from users where id = $1`, [id])
    }

}
