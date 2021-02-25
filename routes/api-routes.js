const db = require('../models');
const router = require("express").Router();


// GET workouts
// router.get("/api/workouts", (req, res) => {
//   db.Workout.find({}).then(dbWorkout => {
//     // dbWorkout
//   });
//   res.json(dbWorkout);
// }). catch(err => {
//   res.json(err);
// });

// Add exercise 
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercise: req.body } },
    { new: true }).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
      res.json(err);
    });
});

// Create workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  module.exports = router;