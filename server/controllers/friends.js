var mongoose = require('mongoose');
var friend = mongoose.model('friend');

module.exports = (function() {
  return {
    show: function(req, res) {
      friend.find({}, function(err, results){
      	if(err) {
      		console.log(err);
      	} else {
          console.log("this is working!");
      		res.json(results);
      	}
      })
    },

    create: function(req, res){
      var friend = new friend({name: req.body.name, age: req.body.age})
      friend.save(function(err, result){
        if(err){
            console.log('error');
        } else
        {
          console.log('this is working');
          // friend.find({}, function(err, result){
          //   console.log
          // })
          res.redirect('/friends');
        }
      })
    }
  }
})();
