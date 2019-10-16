import express, { Express, NextFunction, Request, Response } from 'express'
import { Order, OrderService } from 'order-domain'
import { v4 } from 'uuid'

const orders_router: (app: Express, orderService: OrderService) => Express = (app, orderService) => {
    const router = express.Router()

    router.get('/', (_: Request, response: Response) => {
        orderService.find_all()
            .then(orders => response.send(orders))
    })
    router.get('/:id', ({ params }: Request, response: Response) => {
        orderService.find(<typeof v4>(params["id"] as unknown))
            .then(order => response.send(order))
    })
    router.post('/', ({ body }: Request, response: Response) => {
        orderService.create_order(body as Order)
            .then(id => response.send(id))
    })
    router.put('/:id', ({ params, body }: Request, response: Response) => {
        response.send(orderService.update_order(<typeof v4>(params["id"] as unknown), body as Order))
    })
    router.delete('/:id', ({ params }: Request, response: Response) => {
        response.send(orderService.delete_order(<typeof v4>(params["id"] as unknown)))
    })
    app.use("/orders", router)

    // Handle errors
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        next(err)
    })

    return app
}

export default orders_router
