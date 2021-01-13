import express, {Request, Response} from 'express'
import {User, UserService} from 'user-domain'
import {UserRepository} from 'user-repository'
import {v4} from 'uuid/interfaces'

let users_router = express.Router()

users_router.get('/', (_: Request, response: Response) => {
    new UserService(new UserRepository()).find_all()
        .then(users =>
            response.send(users)
        )
})

users_router.get('/:id', ({params}: Request, response: Response) => {
    new UserService(new UserRepository()).get_user(params["id"] as unknown as v4)
        .then(user =>
            response.send(user)
        )
})

users_router.post('/', ({body}: Request, response: Response) => {
    response.send(new UserService(new UserRepository()).create_user(body as User))
})

users_router.put('/:id', ({params, body}: Request, response: Response) => {
    response.send(new UserService(new UserRepository()).update_user(params["id"] as unknown as v4, body as User))
})

users_router.delete('/:id', ({params}: Request, response: Response) => {
    response.send(new UserService(new UserRepository()).delete_user(params["id"] as unknown as v4))
})

export default users_router
