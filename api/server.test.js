const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('characters').truncate()
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})




describe('[POST] /characters', () => {
  it('returns a status 201 CREATED', async () => {
    const res = await request(server).post('/characters').send({ character_name: 'carnage' })
    expect(res.status).toBe(201)
  })
  it('returns newly created character', async () => {
    const res = await request(server).post('/characters').send({ character_name: 'carnage' })
    
    expect(res.body).toMatchObject({ character_id: 5, character_name: 'carnage' })
  })
})

describe('[DELETE] /characters', () => {
    it('returns a status 200 DELETE', async () => {
      const res = await request(server).delete('/characters/:id').send({ character_id: 4 })
      expect(res.status).toBe(200)
    })
    it("returns empty string to signify record deletion ",async()=>{
        const res = await request(server).delete('/characters/:id').send({ character_id: 4 })
      expect(res.body).toBe("") // after deletion, no content for deleted record exists
    })
    
  })

