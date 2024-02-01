const React = require("react");
const Layout = require("./Layout");
const ThemeItem = require("./ThemeItem");

function ThemeListPage({ user }) {
  return (
    <Layout user={user}>
      <ThemeItem></ThemeItem>
    </Layout>
  );
}

module.exports = ThemeListPage;
