import express, {Request, Response} from 'express'
import {User, UserService} from 'user-domain'
import {UserRepository} from 'user-repository'

let users_router = express.Router()

users_router.get('/', (_: Request, response: Response) => {
    response.send(new UserService(new UserRepository()).find_all())
})

users_router.get('/:id', ({params}: Request, response: Response) => {
    console.log({id: params["id"]})
    response.send(new UserService(new UserRepository()).get_user(params["id"]))
})

users_router.post('/', ({body}: Request, response: Response) => {
    console.log({body: body})
    response.send(new UserService(new UserRepository()).create_user(body as User))
})

users_router.put('/:id', ({params, body}: Request, response: Response) => {
    console.log({id: params["id"], body})
    response.send(new UserService(new UserRepository()).update_user(params["id"], body as User))
})

users_router.delete('/:id', ({params}: Request, response: Response) => {
    console.log({id: params["id"]})
    response.send(new UserService(new UserRepository()).delete_user(params["id"]))
})

export default users_router
