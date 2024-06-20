// exports.index = function (req, res) {
//   res.render('index');
// }
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

exports.index = function (req, res) {
  res.render('index');
};

app.get('/', exports.index);

module.exports = app;
