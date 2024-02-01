const React = require('react');
const Layout = require('./Layout');
const ThemeItem = require('./ThemeItem');

function ThemeListPage({title, themes}) {
  return (
    <Layout title={title}>
      {themes.map(theme => (
        <ThemeItem key={theme.id} theme={theme}/>
      )) }
    </Layout>
  );
}

module.exports = ThemeListPage;
