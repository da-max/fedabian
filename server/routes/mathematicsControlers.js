const models = require('../models')
const { mode } = require('~/nuxt.config')

module.exports = {
  async summarySheetsList(_req, res) {
    try {
      const summarySheets = await models.SummarySheet.findAll({
        attributes: ['id', 'name', 'path', 'themeId', 'slug']
      })
      return res.status(200).json(summarySheets)
    } catch {
      return res.status(500).json({ error: 'cannot get summary sheets.' })
    }
  },

  async themesList(_req, res) {
    try {
      const themes = await models.Theme.findAll({
        attributes: ['id', 'name', 'slug']
      })
      return res.status(200).json(themes)
    } catch {
      return res.status(500).json({ error: 'cannot get mathematics themes.' })
    }
  },

  async summarySheetRetrive(req, res) {
    const summarySheetSlug = req.params.summarySheetSlug

    try {
      const summarySheet = await models.SummarySheet.findOne({
        attributes: ['id', 'name', 'path'],
        where: { slug: summarySheetSlug }
      })
      if (summarySheet) {
        return res.status(200).json(summarySheet)
      } else {
        return res.status(403).json({ error: 'summary sheet not found.' })
      }
    } catch {
      return res.status(500).json({ error: 'unable to get summary sheet.' })
    }
  },

  async themeCreate(req, res) {
    const name = req.body.name
    const slug = req.body.slug

    try {
      const themeFound = await models.Theme.findOne({
        attributes: ['id', 'name', 'slug'],
        where: { slug }
      })
      if (!themeFound) {
        const newTheme = await models.Theme.create({
          name,
          slug
        })
        return res
          .status(201)
          .json({ id: newTheme.id, name: newTheme.name, slug: newTheme.slug })
      } else {
        return res.status(409).json({ error: 'theme already exist.' })
      }
    } catch (err) {
      res.status(500).json({ error: `${err} cannot add theme.` })
    }
  },

  async summarySheetCreate(req, res) {
    const name = req.body.name
    const path = req.body.path
    const slug = req.body.slug
    const themeId = req.body.themeId

    try {
      const summarySheetFound = await models.SummarySheet.findOne({
        attributes: ['id', 'name', 'path', 'slug'],
        where: { slug }
      })

      if (!summarySheetFound) {
        const themeFound = await models.Theme.findOne({
          attributes: ['name', 'slug'],
          where: { id: themeId }
        })
        if (themeFound) {
          const summarySheet = await models.SummarySheet.create({
            name,
            path,
            slug,
            themeId
          })
          return res.status(201).json(summarySheet)
        } else {
          return res.status(409).json({ error: 'cannot get theme.' })
        }
      } else {
        return res.status(409).json({ error: 'summary sheet already exist.' })
      }
    } catch {
      return res.status(500).json({ error: 'unable to verify summary sheets.' })
    }
  },

  async summarySheetUpdate(req, res) {
    const name = req.body.name
    const slug = req.params.summarySheetSlug
    const path = req.body.path
    const themeId = req.body.themeId

    try {
      const summarySheetFound = await models.SummarySheet.findOne({
        attributes: ['id', 'name', 'slug', 'path', 'themeId'],
        where: { slug }
      })
      if (summarySheetFound) {
        await summarySheetFound.update({
          name,
          path,
          slug,
          themeId
        })
        return res.status(201).json({ message: 'summary sheet update.' })
      } else {
        return res.status(403).json({ error: 'summary sheet not found.' })
      }
    } catch (error) {
      return res.status(500).json({ error: 'cannot update summary sheet.' })
    }
  },

  async summarySheetDelete(req, res) {
    const slug = req.params.summarySheetSlug

    try {
      const summarySheetDelete = await models.SummarySheet.destroy({
        where: { slug }
      })
      if (summarySheetDelete) {
        return res.status(201).json({ status: 'summary sheet delete.' })
      } else {
        return res.status(403).json({ error: 'summary sheet not found.' })
      }
    } catch {
      return res.status(500).json({ error: 'cannot delete summary sheet.' })
    }
  }
}
