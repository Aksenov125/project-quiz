const router = require("express").Router();
const QuestionPageList = require("../../components/QuestionPageList");
const ThemeListPage = require("../../components/ThemeListPage");
const { Theme, Question, User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.findAll();
    const html = res.renderComponent(ThemeListPage, {
      title: "Themes",
      themes,
      user: res.app.locals.user,
    });
    res.send(html);
  } catch ({ message }) {
    res.json(message);
  }
});

router.get("/:themeId/:questionId", async (req, res) => {
  try {
    const { themeId, questionId } = req.params;
    const theme = await Theme.findOne({ where: { id: themeId } });
    const [question] = await Question.findAll({ where: { id: questionId } });
    const html = res.renderComponent(QuestionPageList, {
      title: "123",
      question,
      theme,
    });
    res.send(html);
  } catch ({ message }) {
    res.json(message);
  }
});

router.post("/:themeId/:questionId", async (req, res) => {
  try {
    const { id, answer } = req.body;
    const user = await User.findOne({where:{id: res.app.locals.user.id}})
    const questionTrue = await Question.findOne({ where: { id } });
    if(questionTrue.answer === answer){
      user.score += 10
      user.save()
      res.app.locals.user.score += 10
      res.json({message : 'ты молодец'});
    }else{
      user.score -= 10
      user.save()
      res.app.locals.user.score -= 10
      res.json({message : `Ответ не верный, правильный овтет был ${questionTrue.answer}`});
    }



    res.json();
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
