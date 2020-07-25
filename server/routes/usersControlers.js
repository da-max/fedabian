// Imports
const bcrypt = require('bcrypt')
const asyncLib = require('async')
const jwtUtils = require('../utility/jwt.utility')
const models = require('../models')

//  REGEX
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/

module.exports = {
  register: (req, res) => {
    const email = req.body.email
    const userName = req.body.userName
    const lastName = req.body.lastName
    const firstName = req.body.firstName
    const password = req.body.password

    if (
      email === null ||
      userName === null ||
      lastName === null ||
      firstName === null ||
      password === null
    ) {
      return res.status(400).json({ error: 'missing parameters' })
    }

    if (userName.lenght >= 13 || userName.lenght <= 4) {
      return res
        .status(400)
        .json({ error: 'wrong username (must be lenght 5 - 12' })
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'wrong email' })
    }

    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({ error: 'wrong password' })
    }

    asyncLib.waterfall([
      (done) => {
        models.User.findOne({
          attributes: ['email'],
          where: { email }
        })
          .then((userFound) => {
            done(null, userFound)
          })
          .catch(() => {
            return res.status(500).json({ error: 'unable to verify user' })
          })
      },
      (userFound, done) => {
        if (!userFound) {
          bcrypt.hash(password, 5, (err, bcryptPassword) => {
            // eslint-disable-next-line
            console.log(err)
            done(null, userFound, bcryptPassword)
          })
        } else {
          return res.status(409).json({ error: 'user already exist' })
        }
      },
      (userFound, bcryptPassword, done) => {
        models.User.create({
          userName,
          firstName,
          lastName,
          email,
          password: bcryptPassword,
          isAdmin: false
        })
          .then((newUser) => {
            done(null, newUser)
          })
          .catch((err) => {
            return res.status(500).json({ error: `${err} cannot add user` })
          })
      },
      (newUser) => {
        if (newUser) {
          return res.status(201).json({ userId: newUser.id })
        } else {
          return res.status(500).json({ error: 'cannot add user' })
        }
      }
    ])
  },
  login: (req, res) => {
    const email = req.body.email
    const password = req.body.password

    if (email === null || password === null) {
      return res.status(400).json({ error: 'missing parameters' })
    }

    asyncLib.waterfall([
      (done) => {
        models.User.findOne({
          attributes: [
            'id',
            'password',
            'email',
            'lastName',
            'firstName',
            'userName'
          ],
          where: { email }
        })
          .then((userFound) => {
            done(null, userFound)
          })
          .catch(() => {
            return res.status(500).json({ error: 'unable to verify user' })
          })
      },
      (userFound, done) => {
        if (userFound) {
          bcrypt.compare(
            password,
            userFound.password,
            (errBcrypt, resBycrypt) => {
              done(null, userFound, resBycrypt)
            }
          )
        } else {
          return res.status(403).json({ error: 'user not exist in DB' })
        }
      },
      (userFound, resBycrypt, done) => {
        if (resBycrypt) {
          done(null, userFound)
        } else {
          return res.status(403).json({ error: 'user not exist in DB.' })
        }
      },
      (userFound) => {
        if (userFound) {
          return res.status(200).json({
            userId: userFound.id,
            token: jwtUtils.generateTokenForUser(userFound)
          })
        } else {
          return res.status(500).json({ error: 'cannot log on user' })
        }
      }
    ])
  },

  getUserProfile(req, res) {
    const headerAuth = req.headers.authorization
    const userId = jwtUtils.getUserId(headerAuth)

    if (userId < 0) {
      return res.status(201).json({ error: 'wrong token' })
    }

    models.User.findOne({
      attributes: [
        'id',
        'email',
        'username',
        'lastName',
        'firstName',
        'isAdmin'
      ],
      where: { id: userId }
    })
      .then((user) => {
        if (user) {
          const response = {
            user
          }
          res.status(201).json(response)
        } else {
          res.status(404).json({ error: 'user not found' })
        }
      })
      .catch(() => {
        res.status(500).json({ error: 'cannot fetch user' })
      })
  },

  updateUserProfile(req, res) {
    const headerAuth = req.headers.authorization
    const userId = jwtUtils.getUserId(headerAuth)

    const lastName = req.body.lastName
    const firstName = req.body.firstName
    const userName = req.body.userName

    asyncLib.waterfall([
      (done) => {
        models.User.findOne({
          attributes: ['id', 'firstName', 'lastName', 'userName'],
          where: { id: userId }
        })
          .then((userFound) => {
            done(null, userFound)
          })
          .catch(() => {
            return res.status(500).json({ error: 'unable to verify user' })
          })
      },
      (userFound, done) => {
        if (userFound) {
          userFound
            .update({
              lastName: !lastName ? userFound.lastName : lastName,
              firstName: !firstName ? userFound.firstName : firstName,
              userName: !userName ? userFound.userName : userName
            })
            .then(() => {
              done(null, userFound)
            })
            .catch(() => {
              res.status(500).json({ error: 'cannot update user' })
            })
        }
      },
      (userFound) => {
        if (userFound) {
          return res.status(201).json({ userFound })
        } else {
          res.status(500).json({ error: 'cannot update user profile' })
        }
      }
    ])
  }
}
