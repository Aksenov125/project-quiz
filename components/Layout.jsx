const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/materialize.css" />
        <link rel="stylesheet" href="/styles/custStyles.css" />
        <script defer src="/scripts/question.js"></script>
      </head>
      <body>
        <Navbar user={user}></Navbar>
        {children}
      </body>
    </html>
  );
};
