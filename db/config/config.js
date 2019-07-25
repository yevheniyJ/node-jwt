module.exports = {
    development: {
        username: 'postgres',
        password: '',
        database: 'postgres',
        host: 'localhost',
        port: '5432',
        dialect: 'postgres'
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
};
