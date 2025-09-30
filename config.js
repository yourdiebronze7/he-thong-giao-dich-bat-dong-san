module.exports = {
  database: process.env.MONGODB_URI || 'mongodb://localhost:27017/real-estate',
  secret: process.env.JWT_SECRET || 'ChangeThisSecret!' // Updated default JWT secret
};