const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
        default: 0,
        allowNull: true,
      },
      weight: {
        type: Number,
        default: 0,
        allowNull: true,
      },
      reps: {
        type: String,
        default: 0,
        allowNull: true,
      },
      sets: {
        type: String,
        default: 0,
        allowNull: true,
      },
      distance: {
        type: Number,
        default: 0,
        allowNull: true,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", FitnessSchema);

module.exports = Workout;
