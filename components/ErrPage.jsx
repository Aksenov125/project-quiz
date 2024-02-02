const React = require("react");
const Layout = require("./Layout");

function errorPage({ title }) {
  return (
    <Layout title={title}>
      <div className="errorPage">
        <p className="error404">404</p>
        <img
          class="error-pic"
          src="https://sun9-20.userapi.com/impg/YVJJx9xxsu2Z44-MlYKtrZ7cwCoqbwra5IFDXQ/fCgsJY1VjgU.jpg?size=604x588&quality=96&sign=33c815cd30340d0818097435a3e568c9&type=album"
          alt="Тут могла бы быть интересная картинка"
        />
      </div>
    </Layout>
  );
}

module.exports = errorPage;
