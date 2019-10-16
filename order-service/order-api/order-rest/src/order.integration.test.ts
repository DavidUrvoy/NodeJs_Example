import express from 'express'
import { Order, OrderPort, OrderService } from 'order-domain'
import request from 'supertest'
import { v4 as uuid } from 'uuid'
import orders_router from './order-controller'

const orders: Order[] = [
    { id: '09224c9c-e61c-471a-a277-786d90e1503f' as any, address: '18 rue de la rue', reference: 'DE899DZD89', pricing: 89 },
    { id: '67de5690-d14b-4139-8eba-a0ea7c941a9a' as any, address: 'Champs Elysées', reference: 'ZE99D8EDD', pricing: 98 },
    { id: '111bbb5b-f23d-4231-b896-da81608253f9' as any, address: 'Maison Blanche', reference: 'ZRE09D8Z09', pricing: 12 },
    { id: 'bf46eab4-80f7-4050-83a3-0d193bde5084' as any, address: 'Dixea', reference: 'SD980990SD', pricing: 100_000 },
    { id: 'c92eb45f-2215-45b4-aeeb-a8de31069223' as any, address: 'Narnia', reference: 'DS98DE8F90', pricing: 983 },
]

// Mock the database behavior
const mockRepository: OrderPort = {
    find: id => Promise.resolve(orders.find(order => order.id === id)),
    find_all: () => Promise.resolve(orders),
    create_order: () => Promise.resolve(uuid() as any),
    update_order: () => Promise.resolve(),
    delete_order: () => Promise.resolve()
}

/**
 * Setup the server here as you would in a boot module. You can inject modules or use mocks, for instance, inject the database mock above, or inject the real repository.
 * Keep in mind that testing the microservice as a whole is important, but will either require a test database to run, or an embedded database (Probably better as the tests can run on isolation).
 */
const server = orders_router(express(), new OrderService(mockRepository))

describe('Order service integration tests', () => {
    describe('GET endpoints', () => {
        test('GET /orders - should find all orders', async () => {
            const { statusCode, body } = await request(server).get('/orders')
            expect(statusCode).toBe(200)
            expect(JSON.stringify(body)).toBe(JSON.stringify(orders))
        })
        test('GET /orders/:id - should find order by id', async () => {
            const id = '67de5690-d14b-4139-8eba-a0ea7c941a9a'
            const { statusCode, body } = await request(server).get(`/orders/${id}`)
            expect(statusCode).toBe(200)
            expect(JSON.stringify(body)).toBe(JSON.stringify(orders.find(order => order.id?.toString() === id)))
        })
    })

    test('POST /orders - should create a order', async () => {
        const { statusCode, body } = await request(server).post('/orders')
        expect(statusCode).toBe(200)
    })
    test('PUT /orders/:id - should update a order', async () => {
        const { statusCode, body } = await request(server).put('/orders/c92eb45f-2215-45b4-aeeb-a8de31069223')
        expect(statusCode).toBe(200)
    })
    test('DELETE /orders/:id - should delete a order', async () => {
        const { statusCode, body } = await request(server).delete('/orders/09224c9c-e61c-471a-a277-786d90e1503f')
        expect(statusCode).toBe(200)
    })
})