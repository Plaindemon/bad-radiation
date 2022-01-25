const router = require('express').Router();

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

router
  .route('/:userId/friends/:friendId')
  .post(createFriends).delete(deleteFriends)


module.exports = router;