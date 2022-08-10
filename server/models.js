const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
  bodyPart: String,
  equipment: String,
  gifUrl: String,
  id: String,
  name: String,
  target: String
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

exports.save = (exercise) => {
  return Exercise.insertMany(exercise);
}


exports.getExercises = (muscle) => {
  return Exercise.find({bodyPart: muscle})
  .limit(12)
  .exec()
}

// db.exercises.aggregate([{$match: {bodyPart:'chest'}}, { $sample: {size: 10}}])
//  db.exercises.aggregate([{ $sample: {size: 10}}])


// let randomExercise = (muscle) => {
//   return Exercise.count({bodyPart: muscle})
//   .exec((err, count) => {
//     var random = Math.floor(Math.random() * count);

//     Exercise.findOne({bodyPart: muscle}).skip(random)
//     .exec((err, results) => {
//       console.log(result);
//     })
//   })
// }

// module.exports.save = save;
// module.exports.getExercises = getExercises;