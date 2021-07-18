const db = require('../../data/dbConfig.js')
const Characters = require('./characters-model')

test('sanity', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

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

describe('characters model', () => {  
 
  describe('insert', () => {
    test('returns the inserted row', async () => {
      const input = { character_name: 'carnage' }
      const carnage = await Characters.insert(input)
      expect(carnage).toMatchObject({ "character_id": 5, "character_name": "carnage" })     
    })

    test("test that the db is greater in length after insertion",async ()=>{
        const input = { character_name: 'carnage' }
        const carnage = await Characters.insert(input)        
        const data = await db('characters')
        expect(data).toHaveLength(5)
    })
  })

  describe("remove",()=>{
      test("deletes a resource", async()=>{
        const input = { character_name: 'carnage' }
        const carnage = await Characters.insert(input)       
       
          const deleteCarnage = await Characters.remove(5)
          expect(deleteCarnage).toEqual(1)  // It equals 1 because this is the number of records deleted in db
      })
      test("test to see that the db length has shrunk",async()=>{
        const input = { character_name: 'carnage' }
        const carnage = await Characters.insert(input)           
          const deleteCarnage = await Characters.remove(5)
          const data = await db('characters')
        expect(data).toHaveLength(4)

      })
  })
})