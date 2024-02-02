const router = require("express").Router();
const errPage = require("../../components/ErrPage");

router.get("/", async (req, res) => {
  try {
    const html = res.renderComponent(errPage, {
      title: "404 ERROR",
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
