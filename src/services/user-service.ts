import User from '../domain/user';

export default class UserService {
    
    static get_user: () => User = () => new User("Bruce", "Wayne", new Date())

}
