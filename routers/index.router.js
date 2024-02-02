const router = require('express').Router();

const errRouter = require("./views/err.router");


const mainPage = require('./views/main.router');
const themesPage = require('./views/theme.router');
const userPage = require('./views/user.router');
const usersApiRegestration = require('./api/api.users.router');

router.use('/', mainPage);
router.use('/themes', themesPage);
router.use('/user', userPage);

router.use('/api/users', usersApiRegestration);
router.use("/*", errRouter);

module.exports = router;
