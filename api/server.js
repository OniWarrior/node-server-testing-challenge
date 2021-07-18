const express = require("express");

const Characters = require("./spidermanCharacters/characters-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up!" });
});


server.post("/characters", async (req, res) => {
    try{
        res.status(201).json(await Characters.insert(req.body))

    }catch(error){
        next(error)
    }
  
});

server.delete("/characters/:id",async (req, res) => {
    try{
        res.status(200).json(await Characters.remove(req.params.id))        

    }catch(error){
        next(error)
    }
});



module.exports = server;
