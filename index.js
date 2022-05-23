const express = require('express')
const server = express()

server.get('/', (req, res) => {
  return res.json({ mensagem: 'Api está funcionando' })
})

server.get('/cadastrar', (req, res) => {
  let usuario = {
    nome: req.query.nome,
    senha: req.query.senha,
    tipo: req.query.tipo,
    email: req.query.email,
    celular: req.query.celular,
    cep: req.query.cep
  }

  return res.json(usuario)
})

server.listen(3000, () => {
  console.log('Servidor Online na porta 3000')
})
