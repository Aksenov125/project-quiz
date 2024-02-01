const ThemeListPage = require('../../components/ThemeListPage');
const router = require('express').Router();
const { Theme } = require('../../db/models');


router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    console.log(themes);
    const html = res.renderComponent(ThemeListPage, { title: 'Themes', themes });
    res.send(html);
  } catch ({ message }) {
    res.json(message);
  }
});


module.exports = router;
