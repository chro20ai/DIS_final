const mongoose = require('mongoose');

// 3. Finish the account schema

const ClientSchema = new mongoose.Schema({
    clientId: String,
    firstName: String,
    lastName: String,
    streetAddress: String,
    city: String
});

const modelClient = mongoose.model('clients', ClientSchema);

module.exports = modelClient;

