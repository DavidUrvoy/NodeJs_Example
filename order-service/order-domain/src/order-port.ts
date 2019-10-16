import { v4 } from 'uuid'
import { Order } from './order'

export interface OrderPort {

    find_all(): Promise<Order[]>
    find(id: typeof v4): Promise<Order | undefined>
    create_order(order: Order): Promise<typeof v4 | undefined>
    update_order(id: typeof v4, order: Order): void
    delete_order(id: typeof v4): void

}
