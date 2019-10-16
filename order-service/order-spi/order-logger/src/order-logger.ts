import { Order, OrderPort } from 'order-domain'
import { v4 } from 'uuid'

export class OrderLogger implements OrderPort {

    find_all(): Promise<Order[]> {
        console.log('fetching orders')
        return Promise.resolve([])
    }
    find(id: typeof v4): Promise<Order | undefined> {
        console.log(`fetching order with id: ${id}`)
        return Promise.resolve(undefined)
    }
    create_order(order: Order): Promise<typeof v4 | undefined> {
        console.log(`creating order: ${order}`)
        return Promise.resolve(undefined)
    }
    update_order(id: typeof v4, order: Order): void {
        console.log(`updating order with id: ${id}`)
    }
    delete_order(id: typeof v4): void {
        console.log(`deleting order with id: ${id}`)
    }

}
