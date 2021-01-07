const config = require('./config');
const mongoose = require('mongoose');
console.log(config.db.username);

mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology:true});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  providerID: String,
  token: String,
});

const Users = mongoose.model("Users", userSchema);

const sahil = new Users({
  name: "Sahil Malek",
  email: "sahil@gmail.com",
  password: "password123",
  providerID: "Google",
  token: "123abc",
});

Users.create(sahil)
.then((err, user) => {
  if (err){
    console.log(err);
  } else{
    console.log(user);
  }
})
