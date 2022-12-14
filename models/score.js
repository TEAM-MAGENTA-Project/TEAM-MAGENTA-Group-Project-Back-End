'use strict';

//bring in mongoose
const mongoose=require('mongoose');

//extract the schema property from mongoose object
const { Schema } = mongoose;

//declare the book schema
const scoreSchema = new Schema({

  name: {type: String, required: true},
  score: {type: Number, required: true},
  // email: {type: String, required: true}

});

// define the model

// allows our `BookModel` to use `mongoose` methods
const ScoreModel = mongoose.model('Score', scoreSchema);

module.exports = ScoreModel;
