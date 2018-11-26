const mongoose = require ("mongoose");

class Client {
    constructor() {
        mongoose.model('Client', {
            name: String,
            email: String,
            zipcode: String,
            stree: String,
            neighborhood: String,
            city: String,
            state: String
        });
    }
}

module.exports = Client;
//