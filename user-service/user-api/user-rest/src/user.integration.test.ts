import express from 'express'
import request from 'supertest'
import { User, UserPort, UserService } from 'user-domain'
import { v4 as uuid } from 'uuid'
import users_router from './user-controller'

const users: User[] = [
    { id: '09224c9c-e61c-471a-a277-786d90e1503f' as any, first_name: 'Jean', last_name: 'Bon', birth_date: new Date('1987-10-05') },
    { id: '67de5690-d14b-4139-8eba-a0ea7c941a9a' as any, first_name: 'Bruce', last_name: 'Wayne', birth_date: new Date('1915-04-07') },
    { id: '111bbb5b-f23d-4231-b896-da81608253f9' as any, first_name: 'Clark', last_name: 'Kent', birth_date: new Date('1987-10-08') },
    { id: 'bf46eab4-80f7-4050-83a3-0d193bde5084' as any, first_name: 'Peter', last_name: 'Parker', birth_date: new Date('1987-10-05') },
    { id: 'c92eb45f-2215-45b4-aeeb-a8de31069223' as any, first_name: 'Ada', last_name: 'Lovelace', birth_date: new Date('1815-12-10') },
]

// Mock the database behavior
const mockRepository: UserPort = {
    find: id => Promise.resolve(users.find(user => user.id === id)),
    find_all: () => Promise.resolve(users),
    create_user: () => Promise.resolve(uuid() as any),
    update_user: () => Promise.resolve(),
    delete_user: () => Promise.resolve()
}

/**
 * Setup the server here as you would in a boot module. You can inject modules or use mocks, for instance, inject the database mock above, or inject the real repository.
 * Keep in mind that testing the microservice as a whole is important, but will either require a test database to run, or an embedded database (Probably better as the tests can run on isolation).
 */
const server = users_router(express(), new UserService(mockRepository))

describe('User service integration tests', () => {
    describe('GET endpoints', () => {
        test('GET /users - should find all users', async () => {
            const { statusCode, body } = await request(server).get('/users')
            expect(statusCode).toBe(200)
            expect(JSON.stringify(body)).toBe(JSON.stringify(users))
        })
        test('GET /users/:id - should find user by id', async () => {
            const id = '67de5690-d14b-4139-8eba-a0ea7c941a9a'
            const { statusCode, body } = await request(server).get(`/users/${id}`)
            expect(statusCode).toBe(200)
            expect(JSON.stringify(body)).toBe(JSON.stringify(users.find(user => user.id?.toString() === id)))
        })
    })

    test('POST /users - should create a user', async () => {
        const { statusCode, body } = await request(server).post('/users')
        expect(statusCode).toBe(200)
    })
    test('PUT /users/:id - should update a user', async () => {
        const { statusCode, body } = await request(server).put('/users/c92eb45f-2215-45b4-aeeb-a8de31069223')
        expect(statusCode).toBe(200)
    })
    test('DELETE /users/:id - should delete a user', async () => {
        const { statusCode, body } = await request(server).delete('/users/09224c9c-e61c-471a-a277-786d90e1503f')
        expect(statusCode).toBe(200)
    })
})