// Imports
const app = require('express')
const usersControlers = require('./routes/usersControlers')
const projectsControlers = require('./routes/projectsControlers')
const contactControlers = require('./routes/contactControlers')

exports.router = (() => {
  const apiRouter = app.Router()

  // Users routes
  apiRouter.route('/users').post(usersControlers.register)
  apiRouter.route('/users/login').post(usersControlers.login)
  apiRouter.route('/users/current').get(usersControlers.getUserProfile)
  apiRouter.route('/users/current').put(usersControlers.updateUserProfile)

  // Projects routes
  apiRouter.route('/projects').get(projectsControlers.getAll)
  apiRouter.route('/projects').post(projectsControlers.create)
  apiRouter.route('/project/:id').delete(projectsControlers.delete)

  // Send mail routes
  apiRouter.route('/send-mail').post(contactControlers.sendMail)

  return apiRouter
})()
