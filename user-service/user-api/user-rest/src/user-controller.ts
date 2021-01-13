import express, {Request, Response} from 'express'
import {UserService} from 'user-domain'
import {UserRepository} from 'user-repository'
    
let users_router = express.Router()

export default users_router.get('/', (_: Request, response: Response) => {
    response.send(new UserService(new UserRepository()).get_user("UUID"))
})
