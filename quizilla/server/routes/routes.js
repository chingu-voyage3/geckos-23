var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
  res.render('index')
});
router.route('/insert')
.post(function(req,res) {
 var quizdb = new Quizdb();
  quizdb.description = req.body.desc;
  
  quizdb.amount = req.body.amount;
  quizdb.month = req.body.month;
  quizdb.year = req.body.year;
quizdb.save(function(err) {
      if (err)
        res.send(err);
      res.send('Quizdb successfully added!');
  });
})
router.route('/update')
.post(function(req, res) {
 const doc = {
     description: req.body.description,
     amount: req.body.amount,
     month: req.body.month,
     year: req.body.year
 };
 console.log(doc);
  Quizdb.update({_id: req.body._id}, doc, function(err, result) {
      if (err)
        res.send(err);
      res.send('Quizdb successfully updated!');
  });
});
router.get('/delete', function(req, res){
 var id = req.query.id;
 Quizdb.find({_id: id}).remove().exec(function(err, expense) {
  if(err)
   res.send(err)
  res.send('Quizdb successfully deleted!');
 })
});
router.get('/getAll',function(req, res) {
 var monthRec = req.query.month;
 var yearRec = req.query.year;
 if(monthRec && monthRec != 'All'){
  Expense.find({$and: [ {month: monthRec}, {year: yearRec}]}, function(err, expenses) {
   if (err)
    res.send(err);
   res.json(expenses);
  });
 } else {
  Expense.find({year: yearRec}, function(err, expenses) {
   if (err)
    res.send(err);
   res.json(expenses);
  });
 }
});
module.exports = router;
