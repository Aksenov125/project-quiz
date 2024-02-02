const router = require('express').Router();
const UserPage = require('../../components/UserPage');

router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(UserPage, {
      title: 'User',
      user: res.app.locals.user,
    });
    res.send(html);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;