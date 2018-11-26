'use strict'

const mongoose = require ('mongoose');

let model;

class ClientController{
  constructor(app){
    app.get('/clients', this.findAll);
    model = mongoose.model("Client");
  }

  async findAll(req, res){
    res.json(await model.find());
  }
};

module.exports = ClientController;