import {User} from './user';

export interface UserPort {

    find_all(): Promise<User[]>
    get_user(id: string): Promise<User>
    create_user(user: User): string
    update_user(id: string, user: User): void
    delete_user(id: string): void

}
