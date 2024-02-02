const React = require("react");

function Navbar({ user }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo right">
          Quiz
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="/themes">Темы</a>
          </li>
          <li>
          </li>
          {user && (
            <li>
              <a href="/user">Привет, {user.name}! У тебя {user.score} очков. Попробуй заработать больше.</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

module.exports = Navbar;
