// app.js

//require and instantiate express
var app = require('express')()

// fake posts to simulate a database
var posts = [
  {
    id: 1,
    author: "John",
    title: "Templating with EJS",
    body: "Blog post number 1"
  },
  {
    id: 2,
    author: "Drake",
    title: "Express: Starting from the Bottom",
    body: "Blog post number 2"
  },
  {
    id: 3,
    author: "Emma",
    title: "Screams",
    body: "Blog post number 3"
  },
  {
    id: 4,
    author: "Cody",
    title: "Events",
    body: "Blog post number 4"
  }
]

