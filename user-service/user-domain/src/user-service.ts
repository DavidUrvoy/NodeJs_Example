import User from './user'

export class UserService {
    
    static get_user: () => User = () => new User("Bruce", "Wayne", new Date(1978, 3, 17))

    test() {
        
    }

}
