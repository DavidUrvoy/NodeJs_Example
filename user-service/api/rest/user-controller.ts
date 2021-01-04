import express, {Request, Response} from 'express'
import UserService from 'user-domain/src/user-service.js'
import call_custom from '../../domain/call-custom.js'
    
let users_router = express.Router()

export default users_router.get('/', (_: Request, response: Response) => {
    call_custom()
    response.send(UserService.get_user())
})
