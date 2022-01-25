const router = require('express').Router();

// get all routes from user-controller
const {
    getAllUsers,
    getUsersById,
    createUsers,
    createFriends,
    updateUsers,
    deleteUsers,
    deleteFriends
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/user
router
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

// Set up GET one, PUT, and DELETE at /api/user/:id
router
  .route('/:id')
  .get(getUsersById)
  .put(updateUsers)
  .delete(deleteUsers);


// Add friend 
// /api/users/:userId/friends/
router
  .route('/:id/friends/:friendId')
  .post(createFriends)

// Delete friend by id
// /api/users/:userId/friends/:friendId
router
  .route('/:id/friends/:friendsId')
  .delete(deleteFriends)


module.exports = router;