const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async () => {
    await api
        .get('/api/notes')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 100000) 

test('there are two notes', async () => {
    const response = await api.get('/api/notes')

    expect(response.body).toHaveLength(2)
})

test('the second note is about HTTP methods', async () => {
    const response = await api.get('/api/notes')

    expect(response.body[1].content).toBe('HTML is easy')
})

afterAll(async () => {
    await mongoose.connection.close()
})