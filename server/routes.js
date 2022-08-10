const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/workout', controllers.saveExerciseInfo);
router.get('/exercise', controllers.getExercises);
// router.get('/images', controllers.getExerciseInfo);

module.exports = router;