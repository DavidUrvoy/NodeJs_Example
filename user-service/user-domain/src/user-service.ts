import {User} from './user'
import {UserPort} from './user-port'

export class UserService {

    constructor(
        public port: UserPort
    ) { }

    get_user: (id: string) => User = id => this.port.get_user(id)
    create_user: (user: User) => string = user => this.port.create_user(user)

}
