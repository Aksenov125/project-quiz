const React = require("react");

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/materialize.css" />
        <link href="/styles/style.css" rel="stylesheet"></link>
        {/* <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" />
        <script defer src="/scripts/update.js" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
};
