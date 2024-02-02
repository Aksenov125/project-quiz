const router = require('express').Router();
const QuestionPageList = require('../../components/QuestionPageList');
const ThemeListPage = require('../../components/ThemeListPage');
const { Theme, Question } = require('../../db/models');


router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    const html = res.renderComponent(ThemeListPage, { title: 'Themes', themes, user: res.app.locals.user, });
    res.send(html);
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/:themeId/', async(req, res)=>{
try {
  console.log(res);
  const {themeId} = req.params
  const questions = await Question.findAll({where:{theme_id: themeId}})
  const html = res.renderComponent(QuestionPageList, {title: "123",question:questions[0]})
  res.send(html)
} catch ({message}) {
  res.json(message)
  
}
})

module.exports = router;
