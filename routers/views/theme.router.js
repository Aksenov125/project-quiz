const ThemeListPage = require('../../components/ThemeListPage');
const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    const html = res.renderComponent(ThemeListPage, { title: 'Themes' });
    res.send(html);
  } catch ({ message }) {
    res.json(message);
  }
});


module.exports = router;
