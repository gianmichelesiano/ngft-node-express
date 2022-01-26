const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'db-login',
    password: env.DB_PASSWORD || 'db-password',
    database: env.DB_NAME || 'ngft-crew',
  },
  port: env.PORT || 5000

};

module.exports = config;
