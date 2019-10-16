import express, { Express, NextFunction, Request, Response } from 'express'
import { User, UserService } from 'user-domain'
import { v4 } from 'uuid'

const users_router: (app: Express, userService: UserService) => Express = (app, userService) => {
    const router = express.Router()

    router.get('/', (_: Request, response: Response) => {
        userService.find_all()
            .then(users => response.send(users))
    })
    router.get('/:id', ({ params }: Request, response: Response) => {
        userService.find(<typeof v4>(params["id"] as unknown))
            .then(user => response.send(user))
    })
    router.post('/', ({ body }: Request, response: Response) => {
        userService.create_user(body as User)
            .then(id => response.send(id))
    })
    router.put('/:id', ({ params, body }: Request, response: Response) => {
        response.send(userService.update_user(<typeof v4>(params["id"] as unknown), body as User))
    })
    router.delete('/:id', ({ params }: Request, response: Response) => {
        response.send(userService.delete_user(<typeof v4>(params["id"] as unknown)))
    })
    app.use("/users", router)

    // Handle errors
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        next(err)
    })

    return app
}

export default users_router
