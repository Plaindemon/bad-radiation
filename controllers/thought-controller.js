const { Thought, Users } = require('../models');

const thoughtController = {
    // the functions will go in here as methods
    // get all thoughts 
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // // get one thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then(dbThoughtData => {
            // If no Thought is found then it sends 404 error messages
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with that id!' });return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
// fix model // 
     // Create Thought 
     createThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
        .then(({ _id }) => {
            // console.log(_id)
            return Users.findOneAndUpdate(
                { _id: params.userId },
                // $push method to add the thought's _id to the specific user we want to update
                { $push: { thought: _id }},
                { new: true }
                );
          })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'No thoughts with this id!'});
                return;
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.status(400).json(err));
    }, 

    // // update Thought by id 
    updateThought({ params, body }, res){
        Thought.findByIdAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    // // delete thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(deletedThought => {
            if (!deletedThought){
                res.status(404).json({ message: 'No thought found that that id, unable to delete thought'});
                return;
            }
            return Users.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { thoughts: params.thoughtId } },
                { new: true }
              );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                  }
                  res.json(dbUserData);
            })
        
        .catch(err => res.status(400).json(err));
    },

    //  // add reply to comment
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body} } ,
      { new: true, runValidators: true }
    )
    .populate(
        {
            path: 'reactions', 
            select:'-__v'
        })
        .select('-__v')
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No reaction found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },

  // remove reply
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: { reactionId: params.reactionId}} } ,
        { new: true }
    )
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.json(err));
  }



}

module.exports = thoughtController;