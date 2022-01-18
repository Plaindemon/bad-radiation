const router = require('express').Router();
const userRoutes = require('./user-routes');
// const pizzaRoutes = require('./pizza-routes');

router.use('/users', userRoutes);


// add prefix of `` to routes created in `.js`
// router.use('/pizzas', pizzaRoutes);


module.exports = router;