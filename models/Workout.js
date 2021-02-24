const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercise: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      duration: {
        type: Number,
        allowNull: true,
      },
      weight: {
        type: Number,
        allowNull: true,
      },
      reps: {
        type: String,
        allowNull: true,
      },
      sets: {
        type: String,
        allowNull: true,
      },
      distance: {
        type: Number,
        allowNull: true,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
