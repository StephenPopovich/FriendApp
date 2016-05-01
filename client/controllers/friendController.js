Myapp.controller('friendController', function($scope, friendsFactory){
    console.log('friend controller')
    var friends = [];
    friendsFactory.get_friends(function(data){
      $scope.friends = data;
    })
    $scope.addfriend= function(){
      console.log("button works bro!");
      console.log($scope.new_friend);
      friendsFactory.add_friend($scope.new_friend, function(data){
          $scope.friends = data;
      })
    }
})
