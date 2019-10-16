import { v4 } from 'uuid'
import { User } from './user'
import { UserPort } from './user-port'

export class UserService {

    constructor(public port: UserPort) { }

    find_all: () => Promise<User[]> = () => this.port.find_all()
    find: (id: typeof v4) => Promise<User | undefined> = id => this.port.find(id)
    create_user: (user: User) => Promise<typeof v4 | undefined> = user => this.port.create_user(user)
    update_user: (id: typeof v4, user: User) => void = (id, user) => this.port.update_user(id, user)
    delete_user: (id: typeof v4) => void = id => this.port.delete_user(id)

}
