const router = require("express").Router();
const { User } = require("../../db/models");

router.post("/registration", async (req, res) => {
  const { name } = req.body;
  const user = await User.create({ name, score: 0 });
  res.app.locals.user = user;
  res.redirect("/themes");
});

module.exports = router;
