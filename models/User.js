const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] },
    // add Array of _id values referencing the Thought model 
    // thoughts: { _id: },
    // add Array of _id values referencing the User model (self-reference)
    // friends: { _id: },

})