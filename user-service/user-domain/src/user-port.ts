import {v4} from 'uuid/interfaces';
import {User} from './user';

export interface UserPort {

    find_all(): Promise<User[]>
    get_user(id: v4): Promise<User>
    create_user(user: User): string | v4
    update_user(id: v4, user: User): void
    delete_user(id: v4): void

}
