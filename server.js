'use strict'
//importar mongoose
const mongoose = require ("mongoose");
//import body-parser
const bodyParser = require('body-parser');
//import express
const Express = require ('express');
//importar cors
const cors = require('cors');
//importa arquivo client-controller.js
const ClientController = require('./controller/client-controller');
//importa arquivo client.js - models
const Client = require('./model/client.js')


//classe servidor
class Server {
  constructor(){
    //instância do express
    this.app = new Express();

    //configura boydy-parser
    this.app.use(bodyParser.json());

    //configurando cors
    this.app.use(cors());
    
    //conectar com db mlab
    mongoose.connect('mongodb://rammpk:rammpk5@ds231133.mlab.com:31133/hightechcrud', { useNewUrlParser: true });

    //registrar os modelos - criar collections
    new Client();

    //intancia o ClientController
    this.ClientController = new ClientController(this.app);

    this.app.listen(3000);
  }
}

new Server();