const ThemeListPage = require('../../components/ThemeListPage');
const router = require('express').Router();

router.get('/themes', (req, res) => {
  try {
    const html = renderComponent(ThemeListPage, { title: 'Themes' });
    res.send(html);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
