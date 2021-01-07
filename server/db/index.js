const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection

module.exports = db