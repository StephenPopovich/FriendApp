Myapp.factory('friendsFactory', function($http) {
    var factory = {};
    var friends;
    factory.get_friends = function(callback){
      console.log(callback);
      $http.get('/friends').success(function(result){
          console.log(result);
          
      })
    }
    factory.add_friend = function(info, callback){
        console.log('add friend factory');
        console.log(info);
        $http.post('/add_friend', info).success(function(result){
            console.log(result);
        })
    }

    return factory;
})
