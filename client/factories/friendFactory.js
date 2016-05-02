Myapp.factory('friendsFactory', function($http) {
    var factory = {};
    var friends;
    factory.get_friends = function(callback){
      console.log(callback);
      $http.get('/friends').success(function(friends){
          console.log(friends);
          callback(friends);
      })
    }
    factory.add_friend = function(info, callback){
        console.log('add friend factory');
        console.log(info);
        $http.post('/add_friend', info).success(function(result){
            callback(result);
        })
    }
    factory.destroy_friend = function(id, callback){
      console.log(id);
      $http.get('/destroy_friend/' + id);
    }

    return factory;
})
