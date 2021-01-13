import {User} from './user'
import {UserPort} from './user-port'

export class UserService {

    constructor(
        public port: UserPort
    ) { }

    find_all: () => Promise<User[]> = () => this.port.find_all()
    get_user: (id: string) => Promise<User> = id => this.port.get_user(id)
    create_user: (user: User) => string = user => this.port.create_user(user)
    update_user: (id: string, user: User) => void = (id, user) => this.port.update_user(id, user)
    delete_user: (id: string) => void = id => this.port.delete_user(id)

}
