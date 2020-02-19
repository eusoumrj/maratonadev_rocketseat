const express = require("express")
const server = express()

server.get("/", function(req, res){
  return res.send("ok, cheguei aqui com o nodemon!")
})

server.listen(3000, function(){
  console.log("Iniciei o servidor.")
})
