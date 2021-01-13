import {Client} from 'pg'
import {User, UserPort} from 'user-domain'

const client = new Client({
    user: 'postgres',
    host: 'database',
    database: 'microservices',
    password: 'admin',
    port: 5432,
})
client.connect()

export class UserRepository implements UserPort {

    find_all(): Promise<User[]> {
        return client.query(`SELECT * from users`)
            .then(({rows: users}: {rows: User[]}) => users)
    }
    get_user(id: string): Promise<User> {
        return client.query(`SELECT * from users WHERE id = ${id}`)
            .then(({rows: user}: {rows: User[]}) => user[0])
    }
    create_user(user: User): string {
        client.query(`INSERT into users (id, first_name, last_name, birth_date) VALUES ('${user.id}', '${user.first_name}', '${user.last_name}', '${user.birth_date}')`)
        return user?.id || "coucou"
    }
    update_user(id: string, user: User): string {
        client.query(`UPDATE users
        SET
        id = '${user.id}',
        first_name = '${user.first_name}',
        last_name = '${user.last_name}',
        birth_date = '${user.birth_date}'
        WHERE id = '${user.id}'`)
        return user?.id || "coucou"
    }
    delete_user(id: string): void {
        client.query(`DELETE from users where id = '${id}'`)
    }

}
