// module.exports = function helloworld() {
//     const firstName = "Andrew Jayasinghe";
//     console.log("Hello " + firstName);
//   };

const events = require('./events.js');
const express = require('express');
const app = express();

exports.getEvents = function (req, res) {
  res.json(events);
};

exports.getEventById = function (req, res) {
  const event = events.find(e => e.id == req.params.eventId);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send('Event not found');
  }
};

app.get('/events', exports.getEvents);
app.get('/events/:eventId', exports.getEventById);

module.exports = app;

