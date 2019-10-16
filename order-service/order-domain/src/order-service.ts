import { v4 } from 'uuid'
import { Order } from './order'
import { OrderPort } from './order-port'

export class OrderService {

    constructor(public port: OrderPort) { }

    find_all: () => Promise<Order[]> = () => this.port.find_all()
    find: (id: typeof v4) => Promise<Order | undefined> = id => this.port.find(id)
    create_order: (order: Order) => Promise<typeof v4 | undefined> = order => this.port.create_order(order)
    update_order: (id: typeof v4, order: Order) => void = (id, order) => this.port.update_order(id, order)
    delete_order: (id: typeof v4) => void = id => this.port.delete_order(id)

}
