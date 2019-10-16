import { User } from './user'
import { v4 } from 'uuid'

export interface UserPort {

    find_all(): Promise<User[]>
    find(id: typeof v4): Promise<User | undefined>
    create_user(user: User): Promise<typeof v4 | undefined>
    update_user(id: typeof v4, user: User): void
    delete_user(id: typeof v4): void

}
