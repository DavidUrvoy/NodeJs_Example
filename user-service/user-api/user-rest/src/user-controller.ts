import express, {Request, Response} from 'express'
import {UserService} from 'user-domain'
    
let users_router = express.Router()

export default users_router.get('/', (_: Request, response: Response) => {
    response.send(UserService.get_user())
})
