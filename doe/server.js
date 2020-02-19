// configurando o servidor
const express = require("express")
const server = express()

// configurando a template engine
const nunjucks = require('nunjucks')
nunjucks.configure("./", {
  express: server
})

// configurar a apresentação da página
server.get("/", function(req, res){
  return res.render("index.html")
})

// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function(){
  console.log("Iniciei o servidor.")
})
