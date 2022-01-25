const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of `` to routes created in `.js`
router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);


module.exports = router;