module.exports = {

  development: {
    client:'sqlite3',
    connection: {
      filename: './data/crayons.db'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },
  
  seeds: {
     directory: './data/seeds'
  }
};
