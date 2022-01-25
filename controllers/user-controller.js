const { Users } = require('../models');

const userController = {
    // get all users 
    getAllUsers(req, res) {
        Users.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one user by id
    getUsersById({ params }, res) {
        Users.findOne({ _id: params.id })
            .then(dbUserData => {
                // If no user is found then it sends 404 error messages
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with that id!' }); return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // Create User 
    createUsers({ body }, res) {
        Users.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    // Create Friend 
    createFriends({ params, body }, res) {
        Users.findOneAndUpdate({ _id: params.id }, { $push: { friends: params.friendId } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No friends with this id!' });
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err));
    },
    deleteFriends({ params, body }, res) {
        console.log(body)
        Users.findOneAndUpdate({ _id: params.id }, { $pull: { friends: params.friendId } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No friends with this id!' });
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err));
    },

    // update user by id 
    updateUsers({ params, body }, res) {
        Users.findByIdAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete user
    deleteUsers({ params }, res) {
        Users.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found that that id, unable to delete user' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    }
}

module.exports = userController;