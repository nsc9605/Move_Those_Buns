const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    // default: new Date()
    default: Date.now
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
        unique: true,
        required: true
      },
      weight: {
        type: Number,
        unique: true,
        required: true
        // allowNull: true,
      },
      reps: {
        type: Number,
        unique: true,
        required: true
        // allowNull: true,
      },
      sets: {
        type: Number,
        unique: true,
        required: true
      },
      distance: {
        type: Number,
        unique: true,
        required: true
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
