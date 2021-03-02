const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true
      },
      name: {
        type: String,
        trim: true,
        required: true
      },
      duration: {
        type: Number,
        default: 0,
        required: true
      },
      weight: {
        type: Number,
        default: 0,
        required: true
        // allowNull: true,
      },
      reps: {
        type: Number,
        default: 0,
        required: true
        // allowNull: true,
      },
      sets: {
        type: Number,
        default: 0,
        required: true
      },
      distance: {
        type: Number,
        default: 0,
        required: true
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
