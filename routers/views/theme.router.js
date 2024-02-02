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
    console.log(req.params,'pppppp')
    let questionTrue
    if (+questionId === 0) {
      questionTrue = await Question.findOne({ where: { theme_id:themeId } });
    }else{
      questionTrue = await Question.findOne({
        where: { id: questionId, theme_id: themeId },
      });
      console.log(questionTrue,'qqqqq')
    }


    const theme = await Theme.findOne({ where: { id: themeId } });
    if (questionTrue) {
      const html = res.renderComponent(QuestionPageList, {
        title: "Игра",
        question:questionTrue,
        theme,
      });
      res.send(html);
    } else {
      res.redirect("/themes");
    }
  } catch ({ message }) {
    res.json(message);
  }
});

router.post("/:themeId/:questionId", async (req, res) => {
  try {
    const { id, answer } = req.body;
    const { themeId, questionId } = req.params;

    const user = await User.findOne({ where: { id: res.app.locals.user.id } });
    let questionTrue;
 
    questionTrue = await Question.findOne({ where: { id, themeId } });

    if (questionTrue.answer === answer) {
      user.score += 10;
      user.save();
      res.app.locals.user.score += 10;
      res.json({ message: "ты молодец" });
    } else {
      user.score -= 10;
      user.save();
      res.app.locals.user.score -= 10;
      res.json({
        message: `Ответ не верный, правильный овтет был ${questionTrue.answer}`,
      });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
