const express = require("express");
const MainForm = require("../../components/MainForm");

const router = express.Router();

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
