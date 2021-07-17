const express = require("express");

const Characters = require("./spidermanCharacters/characters-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up!" });
});


server.post("/characters", async (req, res) => {
  res.status(201).json(await Characters.insert(req.body))
});

server.delete("/characters/:id", (req, res) => {
  res.end()
});



module.exports = server;
