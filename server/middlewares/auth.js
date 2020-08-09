const models = require('../models')
const jwtUtils = require('../utility/jwt.utility')

module.exports = (req, res, next) => {
  const headerAuth = req.headers.authorization
  const userId = jwtUtils.getUserId(headerAuth)

  if (userId < 0) {
    return res.status(400).json({ error: 'wrong token' })
  }

  models.User.findOne({
    attributes: ['email'],
    where: { id: userId }
  })
    .then((userFound) => {
      if (userFound.email === 'da-max@tutanota.com') {
        next()
      } else {
        return res.status(500).json({ error: 'access unauthorized' })
      }
    })
    .catch(() => {
      return res.status(500).json({ error: 'unable to verfy user' })
    })
}
