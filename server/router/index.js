const router = require('express').Router()
const user = require('./user')
const todo = require('./todo')

router.use('/user', user)
router.use('/todo', todo)

module.exports = router