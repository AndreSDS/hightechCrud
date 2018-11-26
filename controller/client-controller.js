'use strict'

class ClientController{
  constructor(app){
    app.get('/clients', this.findAll);
  }

  findAll(req, res){
    res.json( [
      {
        name: "Andre Souza",
        email: "andre_Smiths@outlook.clom",
        cpf: 35198862060
      },
      {
        name: "Barbara Souza",
        email: "babi_Smiths@outlook.clom",
        cpf: 35198862060
      },
      {
        name: "Eduardo Souza",
        email: "eduardo_Smiths@outlook.clom",
        cpf: 35198862060
      }
    ])
  }
};

module.exports = ClientController;