const React = require("react");
const Layout = require("./Layout");
const QuestionPageItem = require("./QuestionPageItem");

function QuestionPageList({question,title, theme}) {
  console.log(question);
  return (
    <Layout title={title}>
      <div className="">
      <QuestionPageItem question={question} theme={theme} />
      </div>
    </Layout>
  );
}

module.exports = QuestionPageList;
