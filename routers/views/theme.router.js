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

router.get('/:themeId/:questionId', async(req, res)=>{
try {
  console.log(res);
  const {themeId, questionId} = req.params
  const theme = await Theme.findOne({where:{id: themeId}})
  const [question] = await Question.findAll({where:{id: questionId}})
  const html = res.renderComponent(QuestionPageList, {title: "123",question, theme})
  res.send(html)
} catch ({message}) {
  res.json(message)
  
}
})

module.exports = router;
