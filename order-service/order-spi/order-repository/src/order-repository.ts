import { Order, OrderPort } from 'order-domain'
import { Client } from 'pg'
import { v4 } from 'uuid'

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'microservices',
    password: 'admin',
    port: 5433,
})
client.connect()

export class OrderRepository implements OrderPort {

    find_all(): Promise<Order[]> {
        return client.query(`SELECT * from orders`)
            .then(({ rows: orders }: { rows: Order[] }) => orders)
    }
    find(id: typeof v4): Promise<Order> {
        return client.query(`SELECT * from orders WHERE id = $1`, [id])
            .then(({ rows: order }: { rows: Order[] }) => order[0])
    }
    create_order(order: Order): Promise<typeof v4 | undefined> {
        return client.query(`INSERT into orders (address, reference, pricing) VALUES ($1, $2, $3) RETURNING id`, [order.address, order.reference, order.pricing])
            .then(({ rows }: { rows: { id: typeof v4 | undefined }[] }) => { return rows[0].id })
    }
    update_order(id: typeof v4, order: Order): void {
        client.query(`UPDATE orders SET address = $1, reference = $2, pricing = $3 WHERE id = $4`,
            [order.address, order.reference, order.pricing, id])
    }
    delete_order(id: typeof v4): void {
        client.query(`DELETE from orders where id = $1`, [id])
    }

}
