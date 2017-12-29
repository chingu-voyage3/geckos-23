//models/QuizDb.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuizdbSchema = new Schema({
  title: String,
  description: String,
  answer: String,
  amount: Number,
  day  : String,
  month: String,
  year: Number
});
module.exports = mongoose.model('Quizdb', expenseSchema);
