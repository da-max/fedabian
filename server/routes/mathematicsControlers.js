const asyncLib = require('async')
const models = require('../models')

module.exports = {
  async summarySheetsList(_req, res) {
    const summarySheets = await models.SummarySheet.findAll({
      attributes: ['id', 'name', 'path', 'themeId', 'slug']
    }).catch(() => {
      return res.status(500).json({ error: 'cannot get summary sheets.' })
    })

    return res.status(200).json(summarySheets)
  },

  async themesList(_req, res) {
    const themes = await models.Theme.findAll({
      attributes: ['id', 'name', 'slug']
    }).catch(() =>
      res.status(500).json({ error: 'cannot get mathematics themes.' })
    )

    return res.status(200).json(themes)
  },

  summarySheetRetrive(req, res) {
    const summarySheetSlug = req.params.summarySheetSlug
      ? req.params.summarySheetSlug
      : null

    asyncLib.waterfall([
      (done) => {
        models.SummarySheet.findOne({
          attributes: ['id', 'name', 'path'],
          where: { slug: summarySheetSlug }
        })
          .then((summarySheet) => {
            done(null, summarySheet)
          })
          .catch(() =>
            res.status(500).json({ error: 'unable to get summary sheet.' })
          )
      },
      (summarySheet) => {
        if (summarySheet) {
          return res.status(200).json(summarySheet)
        } else {
          return res.status(403).json({ error: 'summary sheet not found.' })
        }
      }
    ])
  },

  themeCreate(req, res) {
    const name = req.body.name
    const slug = req.body.slug

    asyncLib.waterfall([
      (done) => {
        models.Theme.findOne({
          attributes: ['id', 'name', 'slug'],
          where: { slug }
        })
          .then((themeFound) => {
            done(null, themeFound)
          })
          .catch(() =>
            res.status(500).json({ error: 'unable to verify theme.' })
          )
      },
      (themeFound, done) => {
        if (!themeFound) {
          models.Theme.create({
            name,
            slug
          })
            .then((newTheme) => {
              done(null, newTheme)
            })
            .catch((err) =>
              res.status(500).json({ error: `${err} cannot add theme.` })
            )
        } else {
          return res.status(409).json({ error: 'theme already exist.' })
        }
      },
      (newTheme) => {
        if (newTheme) {
          return res
            .status(201)
            .json({ id: newTheme.id, name: newTheme.name, slug: newTheme.slug })
        } else {
          return res.status(500).json({ error: 'cannot add theme.' })
        }
      }
    ])
  },

  summarySheetCreate(req, res) {
    const name = req.body.name
    const path = req.body.path
    const slug = req.body.slug
    const themeId = req.body.themeId

    console.log(themeId)

    asyncLib.waterfall([
      (done) => {
        models.SummarySheet.findOne({
          attributes: ['id', 'name', 'path', 'slug'],
          where: { slug }
        })
          .then((summarySheetFound) => {
            done(null, summarySheetFound)
          })
          .catch(() =>
            res.status(500).json({ error: 'unable to verify summary sheets.' })
          )
      },
      (summarySheetFound, done) => {
        if (!summarySheetFound) {
          models.Theme.findOne({
            attributes: ['name', 'slug'],
            where: { id: themeId }
          })
            .then((themeFound) => {
              console.log('OK')
              done(null, themeFound)
            })
            .catch((error) => {
              console.log(error)
              return res.status(500).json({ error: 'unable to get theme' })
            })
        } else {
          return res.status(409).json({ error: 'summary sheet already exist.' })
        }
      },
      (themeFound, done) => {
        console.log(themeFound)
        if (themeFound) {
          models.SummarySheet.create({
            name,
            path,
            slug,
            themeId
          })
            .then((summarySheet) => res.status(201).json(summarySheet))
            .catch(() =>
              res.status(500).json({ error: 'cannot add summary sheet.' })
            )
        } else {
          return res.status(409).json({ error: 'cannot get theme.' })
        }
      }
    ])
  },

  summarySheetUpdate(req, res) {
    const name = req.body.name
    const slug = req.params.summarySheetSlug
    const path = req.body.path
    const themeId = req.body.themeId

    console.log(req.body)

    asyncLib.waterfall([
      (done) => {
        models.SummarySheet.findOne({
          attributes: ['id', 'name', 'slug', 'path', 'themeId'],
          where: { slug }
        })
          .then((summarySheetFound) => {
            done(null, summarySheetFound)
          })
          .catch(() =>
            res.status(500).json({ error: 'cannot find summary sheet.' })
          )
      },
      (summarySheetFound) => {
        if (summarySheetFound) {
          summarySheetFound
            .update({
              name,
              path,
              slug,
              themeId
            })
            .then(() =>
              res.status(201).json({ message: 'summary sheet updated.' })
            )
            .catch(() =>
              res.status(500).json({ error: 'cannot update project' })
            )
        } else {
          return res.status(403).json({ error: 'summary sheet not found.' })
        }
      }
    ])
  }
}
