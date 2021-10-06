export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'secret',
  JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME || 3600,
  database: {
    MONGO_URI: process.env.MONGO_URI,
  },
});
