// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '213.190.6.22',
      user : 'u535725043_oministack',
      password : 'oministack',
      database : 'u535725043_oministack'
    },
    migrations: {
      directory: 'src/database/migrations',
      tableName: 'migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host : '213.190.6.22',
      user : 'u535725043_oministack',
      password : 'oministack',
      database : 'u535725043_oministack'
    },
    migrations: {
      directory: 'src/database/migrations',
      tableName: 'migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : '213.190.6.22',
      user : 'u535725043_oministack',
      password : 'oministack',
      database : 'u535725043_oministack'
    },
    migrations: {
      directory: 'src/database/migrations',
      tableName: 'migrations'
    }
  }

};
