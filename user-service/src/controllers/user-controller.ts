import express, {Request, Response} from 'express'
import UserService from '../services/user-service'
import call_custom from '../domain/call-custom'

let users_router = express.Router()

export default users_router.get('/', (_: Request, response: Response) => {
    call_custom()
    response.send(UserService.get_user())
})
