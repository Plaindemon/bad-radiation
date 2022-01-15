// imports mongoose
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(require('./routes'));

// mongoose.connect() tells Mongoose which database we want to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bad-radiation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT} 🌍`));
