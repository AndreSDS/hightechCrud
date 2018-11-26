'use strict'
//importar mongoose
const mongoose = require ("mongoose");
//import express
const Express = require ('express');
//importa arquivo client-controller.js
const ClientController = require('./controller/client-controller');

//classe servidor
class Server {
  constructor(){
    //instância do express
    this.app = new Express();
    //conectar com db mlab
    mongoose.connect('mongodb://rammpk:rammpk5@ds231133.mlab.com:31133/hightechcrud');

    const Cat = mongoose.model('Cat', {name: String });

    const kitty = new Cat({name: "andre"});
    kitty.save().then( () => console.log("Cheguei")).catch( (err) => {throw err});
    
    //intancia o ClientController
    this.ClientController = new ClientController(this.app);

    this.app.listen(8081);
  }
}

new Server();