import { Client } from 'pg'
import { User, UserPort } from 'user-domain'
import { v4 } from 'uuid'

export class UserLogger implements UserPort {

    find_all(): Promise<User[]> {
        console.log('fetching users')
        return Promise.resolve([])
    }
    find(id: typeof v4): Promise<User | undefined> {
        console.log(`fetching user with id: ${id}`)
        return Promise.resolve(undefined)
    }
    create_user(user: User): Promise<typeof v4 | undefined> {
        console.log(`creating user: ${user}`)
        return Promise.resolve(undefined)
    }
    update_user(id: typeof v4, user: User): void {
        console.log(`updating user with id: ${id}`)
    }
    delete_user(id: typeof v4): void {
        console.log(`deleting user with id: ${id}`)
    }

}
