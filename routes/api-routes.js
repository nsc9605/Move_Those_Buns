const db = require("../models");
const router = require("express").Router();

// Add field for total duration of exercise using aggregate
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addField: {
        totalDuration: { $sum: "$exercises.duration" }
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Add exercise
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    // {
    //   $inc: { totalDuration: req.body.duration },
    //   $push: { exercises: req.body },
    // },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Create workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET workouts in range to show stats
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    db.Workout.aggregate([
      { 
        $addField: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
