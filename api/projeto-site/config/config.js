module.exports = {
  production: {
    username: 'kauevolpe',
    password: '100Zala292944',
    database: 'bancokaue',
    host: 'bdprojetoindividual',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
