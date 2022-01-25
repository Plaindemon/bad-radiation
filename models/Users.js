const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
    name: { 
        type: String, 
        unique: true, 
        required: true, 
        // trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] 
    },
    thoughts: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Thought'
    }],
    // add Array of _id values referencing the User model (self-reference)
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
    },
    {
        toJSON: {
        virtuals: true,
        getters: true
        },
        id: false
    }
  );

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

UserSchema.virtual('username').get(function() {
    return this.email.slice(0, this.email.indexOf('@'));
});

const Users = model('Users', UserSchema);

module.exports = Users;

