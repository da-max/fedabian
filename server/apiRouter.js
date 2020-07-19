// Imports
const app = require('express')
const usersControlers = require('./routes/usersControlers')
const projectsControlers = require('./routes/projectsControlers')
const contactControlers = require('./routes/contactControlers')
const mathematicsControlers = require('./routes/mathematicsControlers')

exports.router = (() => {
  const apiRouter = app.Router()

  // Users routes
  apiRouter.route('/users').post(usersControlers.register)
  apiRouter.route('/users/login').post(usersControlers.login)
  apiRouter.route('/users/current').get(usersControlers.getUserProfile)
  apiRouter.route('/users/current').put(usersControlers.updateUserProfile)

  // Projects routes
  apiRouter.route('/projects').get(projectsControlers.list)
  apiRouter.route('/projects').post(projectsControlers.create)
  apiRouter.route('/project/:id').delete(projectsControlers.delete)
  apiRouter.route('/projects/:id').get(projectsControlers.retrieve)
  apiRouter.route('/projects/:id').put(projectsControlers.update)

  // Mathematics routes
  apiRouter
    .route('/mathematics/summary-sheets')
    .get(mathematicsControlers.summarySheetsList)
  apiRouter.route('/mathematics/themes').get(mathematicsControlers.themesList)
  apiRouter
    .route('/mathematics/summary-sheets/:summarySheetId')
    .get(mathematicsControlers.summarySheetRetrive)

  // Send mail routes
  apiRouter.route('/send-mail').post(contactControlers.sendMail)

  return apiRouter
})()
