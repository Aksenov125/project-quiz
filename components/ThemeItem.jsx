const React = require("react");

function ThemeItem({ theme }) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={theme.img} />
            <span className="card-title">{theme.title}</span>
          </div>
          <div className="card-content"></div>
          <div className="card-action">
            <a href={`/themes/${theme.id}/1`}>ПОГНАЛИ!!!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = ThemeItem;
