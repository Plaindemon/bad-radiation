const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts
  } = require('../../controllers/thought-controller');

// Set up GET all at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  

// Set up POST at /api/thoughts
router
  .route('/:userId').post(createThoughts);


// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);




module.exports = router;