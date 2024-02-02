const React = require('react');
const Layout = require('./Layout');

function UserPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="https://cdnn21.img.ria.ru/images/151781/55/1517815595_0:342:1900:1411_1920x0_80_0_0_110fcd67666c6f334f0f8c5f47167b07.jpg" />
              <span className="card-content"></span>
            </div>
            <div className="card-title">{user.name}</div>
            <div className="card-action">Як ше маш!? Моя звать {user.name}. Я вас люблю! Я люблю квиз! Нраица!</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = UserPage;
