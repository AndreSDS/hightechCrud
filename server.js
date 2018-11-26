'use strict'

//import express
const Express = require ('express');
const ClientController = require('./controller/client-controller');

//classe servidor
class Server {
  constructor(){
    //instância do express
    this.app = new Express();
    //intancia o ClientController
    this.ClientController = new ClientController(this.app);

    this.app.listen(8081);
  }
}

new Server();