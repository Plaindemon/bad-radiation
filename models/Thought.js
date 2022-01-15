const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: { type: String, }
})