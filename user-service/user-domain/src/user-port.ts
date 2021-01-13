import {User} from './user';

export interface UserPort {

    find_all(): User[]
    get_user(id: string): User
    create_user(user: User): string
    update_user(id: string, user: User): void
    delete_user(id: string): void

}
