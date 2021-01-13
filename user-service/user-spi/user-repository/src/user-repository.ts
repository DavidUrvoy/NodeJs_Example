import {UserPort} from 'user-domain';
import {User} from 'user-domain';

export class UserRepository implements UserPort {

    find_all(): User[] {
        throw new Error('Method not implemented.');
    }
    get_user(id: string): User {
        return new User("Bruce", "Wayne", new Date(1978, 3, 17))
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
