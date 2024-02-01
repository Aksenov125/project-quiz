const React = require("react");
const Layout = require("./Layout");

module.exports = function MainForm({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <form className="get-user" action="/api/users/registration" method="post">
        <div className="row">
          <div className="input-field col s6">
            <input
              name="name"
              placeholder="Введите имя"
              id="first_name2"
              type="text"
              className="validate"
            />

            <button type="submit" className="waves-effect waves-light btn">
              Add
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};
