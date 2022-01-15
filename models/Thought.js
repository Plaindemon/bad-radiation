const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: { 
        type: String, 
        required: true, 
        validate: [({ length }) => length >= 1 && length <= 128, 'Thought should be between 1-128 Characters long.']
    }, 
    thoughtCreatedAt: {
      type: Date,
      default: Date.now
    },
    username: { 
        type: String, 
        required: true, 
    },
    // reactions: { 

    // }
})

const ReactionSchema = new Schema({
    reactionId: { 
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String, 
        required: true,
        validate: [({ length }) => length >= 1 && length <= 128, 'Thought should be between 1-128 Characters long.']
    },
    username: {
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const Reaction = model('Reaction', ReactionSchema);
const Thought = model('Thought', ThoughtSchema);

module.exports = {
    Thought,
    Reaction
};