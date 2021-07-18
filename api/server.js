const express = require("express");

const Characters = require("./spidermanCharacters/characters-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up!" });
});


server.post("/characters", async (req, res) => {
    try{
        character = await Characters.insert(req.body)
        res.status(201).json(character)

    }catch(error){
        next(error)
    }
  
});

server.delete("/characters/:id",async (req, res) => {
    try{
         await Characters.remove(req.params.id)
         res.json(req.character)        

    }catch(error){
        console.log(error)
    }
});



module.exports = server;
