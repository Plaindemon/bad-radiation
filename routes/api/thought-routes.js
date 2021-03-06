const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)


// Set up POST at /api/thoughts
router
    .route('/:userId').post(createThought);

// /api/thought/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);

// GET one, PUT at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought);

// /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);
// /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);



module.exports = router;