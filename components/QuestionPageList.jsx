const React = require("react");
const Layout = require("./Layout");
const QuestionPageItem = require("./QuestionPageItem");

function QuestionPageList({question,title}) {
  console.log(question);
  return (
    <Layout title={title}>
      <QuestionPageItem question={question}/>
    </Layout>
  );
}

module.exports = QuestionPageList;
