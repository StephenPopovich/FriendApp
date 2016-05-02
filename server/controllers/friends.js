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
      var new_friend = new friend({name: req.body.name, age: req.body.age})
      new_friend.save(function(err, result){
        if(err){
            console.log('error');
        } else {
          console.log('this is working');
          // friend.find({}, function(err, result){
          //   console.log
          // })
          res.json(result);
        }
      })
    },
    destroy: function(req, res){
      friend.remove({_id: req.params._id}, function(err, result){
        if(err){
          console.log('error');
        }else{
          res.json(result);
        }
      })
    },
    update: function(req, res){
      friend.update({_id: req.body._id}, {name: req.body.name, age: req.body.age}, function(err, results){
        if(err){
          console.log('error');
        }else{
          res.json(results);
        }
      })
    }
  }
})();
