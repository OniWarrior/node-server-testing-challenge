const common = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  }
  
  module.exports = {
    development: { // process.env.DB_ENV || 'development'
      ...common,
      connection: {
        filename: './data/spidermanCharacters.db3',
      },
    },
    testing: { // process.env.DB_ENV 'testing'
      ...common,
      connection: {
        filename: './data/test.db3',
      },
    }    
  };
  