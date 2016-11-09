module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost/profiles',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'ishallhaveafishyonalittledishyishallhaveafishywhentheboatcomesin'
}
