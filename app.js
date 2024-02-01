require('@babel/register');
const express = require('express');
const app = express();
const path = require('path');

// const indexRouter = require('./routes/index.routes');
const ssr = require('./middleware/ssr');
// const getUser = require('./middleware/getUser');

app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);
// app.use(getUser);

// app.use('/', indexRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Квиз работает на ${PORT} порту`);
});   