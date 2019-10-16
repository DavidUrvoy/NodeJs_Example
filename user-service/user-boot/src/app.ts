import cookieParser from 'cookie-parser'
import express, { Express, NextFunction, Request, Response } from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import path from 'path'
import { UserPort, UserService } from 'user-domain'
import userController from 'user-rest'

/** 
 * Configuration of the server Application 
 * 
 * Define routes using user-api's controllers and manually inject the Ports that are provided by the server for the production runtime, or mocks for testing.
 */
const app: ({ userAdapter }: { userAdapter: UserPort }) => Express = ({ userAdapter }) => {

    const app = express()

    app.use(logger('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(express.static(path.join(__dirname, 'public')))

    // Define routes
    userController(app, new UserService(userAdapter))

    // catch 404 and forward to error handler
    app.use((_request: Request, _response: Response, next: NextFunction) => next(createError(404)))

    // error handler
    app.use((err: { message: string, status: number }, request: Request, response: Response) => {
        // set locals, only providing error in development
        response.locals.message = err.message
        response.locals.error = request.app.get('env') === 'development' ? err : {}

        // render the error page
        response.status(err.status || 500)
        response.render('error')
    })

    return app
}

export default app
