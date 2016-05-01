  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  var friendsController = require('./../server/controllers/friends.js');
  module.exports = function(app) {
    app.get('/friends', function(req, res) {
      friendsController.show(req, res);
    });

    app.post('/add_friend', function(req, res){
    	friendsController.create(req, res);
    });
  };
