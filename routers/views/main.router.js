const router = require('express').Router();
const MainForm = require("../../components/MainForm");



router.get("/", async (req, res) => {
  try {
    const html = res.renderComponent(MainForm, {
      title: "Registration",
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
