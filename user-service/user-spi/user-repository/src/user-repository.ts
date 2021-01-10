import {UserPort} from 'user-domain';
import user from 'user-domain/src/user';

export default class UserRepository implements UserPort {
    
    find_all(): user[] {
        throw new Error('Method not implemented.');
    }
    get_user(id: string): user {
        throw new Error('Method not implemented.');
    }
    create_user(user: user): string {
        throw new Error('Method not implemented.');
    }
    update_user(id: string, user: user): string {
        throw new Error('Method not implemented.');
    }
    delete_user(id: string): void {
        throw new Error('Method not implemented.');
    }

}
