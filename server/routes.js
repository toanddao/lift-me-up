const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/workout', controllers.saveExerciseInfo);
router.get('/exercise', controllers.getExercises);
router.get('/generate', controllers.generateWorkout);

module.exports = router;