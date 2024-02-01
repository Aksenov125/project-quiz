const ThemeListPage = require('../../components/ThemeListPage');
const router = require('express').Router();
const { Theme } = require('../../db/models');


router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    const html = renderComponent(ThemeListPage, { title: 'Themes', themes, user: res.app.locals.user, });
    res.send(html);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
