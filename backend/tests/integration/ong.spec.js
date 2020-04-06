const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('Should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            "name" : "ONG do teste integrado",
            "email" : "email@emailtesteintegrado.com",
            "zapzap" : "12345678901",
            "city" : "city teste integrado",
            "uf" : "TI"
        })

        expect(response.body).toHaveLength(8)
    })
  
})