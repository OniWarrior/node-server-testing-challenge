const db = require('../../data/dbConfig')


module.exports = {
    insert,    
    remove,    
    getById
  }
  
  
  
  function getById(id) {
    return db('characters').where({ id })
      .first()
  }
  
  function insert(character) {

    return db('characters').insert(character)
      .then(([id]) => {
        return getById(id)
      })
  }
  
  
  function remove(id) {
    return db('characters').where('character_id', id).del()
  }