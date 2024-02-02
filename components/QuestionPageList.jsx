const React = require("react");
const Layout = require("./Layout");
const QuestionPageItem = require("./QuestionPageItem");

function QuestionPageList({question,title, theme, user}) {  
  return (
    <Layout title={title} user={user}>
      <div className="dvigat">
      <QuestionPageItem question={question} theme={theme} />
      </div>
    </Layout>
  );
}

module.exports = QuestionPageList;
