const db = require('../models');
const router = require("express").Router();


// GET workouts
router.get("/api/workout", (req, res) => {
  db.Workout.find({}).then(dbWorkout => {
    // dbWorkou
  });
  res.json(dbWorkout);
}). catch(err => {
  res.json(err);
});


router.post("/api/workout", ({ body }, res) => {
    db.Workout.create(body)
      .then(({ _id }) => 
      db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { exercise: req.body } },
          { new: true }).then(dbWorkout => {
              res.json(dbWorkout)
          }).catch
          )
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  module.exports = router;