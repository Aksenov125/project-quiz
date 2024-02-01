const React = require("react");

module.exports = function MainForm({ title }) {
  return (
    <Layout title={title}>
      <div class="row">
        <div class="input-field col s6">
          <input
            value="Введите имя"
            id="first_name2"
            type="text"
            class="validate"
          />

          <button>Add</button>
        </div>
      </div>
    </Layout>
  );
};
