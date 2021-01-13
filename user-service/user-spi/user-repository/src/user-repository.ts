import {Client} from 'pg'
import {User, UserPort} from 'user-domain'
import {v4} from 'uuid/interfaces'
import {v4 as uuid} from 'uuid'

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
    get_user(id: v4): Promise<User> {
        return client.query(`SELECT * from users WHERE id = ${id}`)
            .then(({rows: user}: {rows: User[]}) => user[0])
    }
    create_user(user: User): string | v4 {
        client.query(`INSERT into users (id, first_name, last_name, birth_date) VALUES ('${uuid()}', '${user.first_name}', '${user.last_name}', '${user.birth_date}')`)
        return user?.id || uuid()
    }
    update_user(id: v4, user: User): void {
        client.query(`UPDATE users
        SET
        first_name = '${user.first_name}',
        last_name = '${user.last_name}',
        birth_date = '${user.birth_date}'
        WHERE id = '${id}'`)
    }
    delete_user(id: v4): void {
        client.query(`DELETE from users where id = '${id}'`)
    }

}
