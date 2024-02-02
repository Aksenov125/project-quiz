const router = require("express").Router();

const mainPage = require("./views/main.router");
const themesPage = require("./views/theme.router");
const usersApiRegestration = require("./api/api.users.router");
const errRouter = require("./views/err.router");

router.use("/", mainPage);
router.use("/themes", themesPage);

router.use("/api/users", usersApiRegestration);
router.use("/*", errRouter);

module.exports = router;
