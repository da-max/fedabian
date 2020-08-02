// Imports
const app = require('express')
const usersControlers = require('./routes/usersControlers')
const projectsControlers = require('./routes/projectsControlers')
const contactControlers = require('./routes/contactControlers')
const mathematicsControlers = require('./routes/mathematicsControlers')

const authMiddleware = require('./middlewares/auth')

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

  // Themes routes
  apiRouter.route('/mathematics/themes').get(mathematicsControlers.themesList)
  apiRouter
    .route('/mathematics/themes')
    .post(authMiddleware, mathematicsControlers.themeCreate)
  apiRouter
    .route('/mathematics/themes/:themeSlug')
    .put(authMiddleware, mathematicsControlers.themeUpdate)
  apiRouter
    .route('/mathematics/themes/:themeSlug')
    .delete(authMiddleware, mathematicsControlers.themeDelete)

  // Summary Sheet routes
  apiRouter
    .route('/mathematics/summary-sheets')
    .get(mathematicsControlers.summarySheetsList)
  apiRouter
    .route('/mathematics/summary-sheets/:summarySheetSlug')
    .get(mathematicsControlers.summarySheetRetrive)

  apiRouter
    .route('/mathematics/summary-sheets')
    .post(authMiddleware, mathematicsControlers.summarySheetCreate)

  apiRouter
    .route('/mathematics/summary-sheets/:summarySheetSlug')
    .put(authMiddleware, mathematicsControlers.summarySheetUpdate)
  apiRouter
    .route('/mathematics/summary-sheets/:summarySheetSlug')
    .delete(authMiddleware, mathematicsControlers.summarySheetDelete)

  // Send mail routes
  apiRouter.route('/send-mail').post(contactControlers.sendMail)

  return apiRouter
})()
