const { Schema, model } = require('mongoose');


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
      },
    },
      {
        toJSON: {
            getters: true
        }
     }
)

const ThoughtSchema = new Schema(
    {
    thoughtText: { 
        type: String, 
        required: true, 
        validate: [({ length }) => length >= 1 && length <= 128, 'Thought should be between 1-128 Characters long.']
    }, 
    thoughtCreatedAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: { 
        type: String, 
        required: true, 
    },
    reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)



ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtSchema);
const Reactions = model('Reactions', ReactionSchema);


module.exports = {
    Thoughts,
    Reactions
};