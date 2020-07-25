const asyncLib = require('async')
const models = require('../models')

module.exports = {
  async summarySheetsList(_req, res) {
    const summarySheets = await models.SummarySheet.findAll({
      attributes: ['id', 'name', 'url', 'themeId', 'slug']
    }).catch(() => {
      return res.status(500).json({ error: 'cannot get summary sheets.' })
    })

    return res.status(200).json(summarySheets)
  },

  summarySheetRetrive(req, res) {
    const summarySheetSlug = req.params.summarySheetSlug
      ? req.params.summarySheetSlug
      : null

    asyncLib.waterfall([
      (done) => {
        models.SummarySheet.findOne({
          attributes: ['id', 'name', 'url'],
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

  async themesList(_req, res) {
    const themes = await models.Theme.findAll({
      attributes: ['id', 'name', 'slug']
    }).catch(() =>
      res.status(500).json({ error: 'cannot get mathematics themes.' })
    )

    return res.status(200).json(themes)
  }
}
