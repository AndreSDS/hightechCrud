'use strict'
//importa mongoose
const mongoose = require ('mongoose');

let model;

class ClientController{
  constructor(app){
    app.get('/clients', this.findAll);
    app.post('/clients', this.create);
    app.put('/clients', this.update);
    app.delete('/clients', this.remove);
    model = mongoose.model("Client");
  }

  async findAll(req, res){
    res.json(await model.find());
  }

  async create(req, res){
    let client = req.body;
    res.json(await model.create(client));
  }

  async update(req, res){
    let client = req.body;
    res.json(await model.updateOne({_id: client._id}, client));
  }

  async remove(req, res){
    let id = req.body._id;
    res.json(await model.deleteOne({_id: id}));
  }
};

module.exports = ClientController;