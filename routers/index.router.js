const router = require('express').Router();


const mainPage = require('./views/main.router')
const themesPage = require('./views/theme.router')

router.use('/', mainPage)
router.use('/themes', themesPage)


module.exports = router