const axios = require('axios');
const models = require('./models.js');

exports.saveExerciseInfo = (req, res) => {
  let url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist';
  let options = {
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_USER
    }
  };

  axios.get(url, options)
  .then((response) => {
    models.save(response.data);
    res.status(200).send(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
}

exports.getExercises = (req, res) => {
  // console.log('req from client: ', req.query.bodyPart);
  let muscle = req.query.bodyPart;
  models.getExercises(muscle)
  .then((response) => {
    // console.log('get exercise info :', response);
    res.send(response);
  })
  .catch((error) => {
    console.log('error getting exercises', error);
  });
}

exports.generateWorkout = (req, res) => {
  models.generateWorkout()
  .then((response) => {
    res.send(response);
  })
  .catch((error) => {
    console.log('error generating workout', error);
  });
}

















// exports.getOne = (req, res) => {
//   console.log(req.query.muscle);
//   let muscle = 'shoulders';
//   randomExercise(muscle)
//   .then((response) => {
//     console.log('get one response: ', response);
//     res.status(200).send(response);
//   })
//   .catch((err) => {
//     console.log('error getting exercise', err);
//   })
//   // randomExercise()
// }

  // let id = req.query.id;
  // console.log(id);
  // // let url = `https://wger.de/api/v2/exerciseinfo/${id}`;
  // let url = `https://wger.de/api/v2/exercisebaseinfo/?category=11&language=2&limit=1`;
  // // let url = `https://wger.de/api/v2/exerciseimage/?category=11&limit=40`;

  // axios.get(url)
  // .then((response) => {
  //   console.log(response.data.results[0].description)
  //   res.status(200).send(response.data);
  // })
  // .catch((err) => {
  //   res.status(400).send(err);
  // })