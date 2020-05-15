const nodemailer = require('nodemailer')

// REGEX
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports = {
  async sendMail(req, res) {
    const email = req.body.email
    const name = req.body.name
    const message = req.body.message

    if (email === null || name === null || message === null) {
      return res.status(400).json({ error: 'missing field' })
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'wrong email' })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_USE_SSL, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_HOST_USER, // generated ethereal user
        pass: process.env.EMAIL_HOST_PASSWORD // generated ethereal password
      }
    })

    try {
      await transporter.sendMail({
        from: '"Admin fedabian" <admin@fedabian.fr>', // sender address
        to: 'maxime.benhassen@tutanota.com', // list of receivers
        subject: 'Prise de contact depuis fedabian.fr', // Subject line
        text: `Nom : ${req.body.name}
      Email : ${req.body.email}
      Message : ${req.body.message}` // plain text body
      })
      return res.status(201).json({ message: 'mail send' })
    } catch {
      return res.status(503).json({ error: 'mail cannot send' })
    }
  }
}
