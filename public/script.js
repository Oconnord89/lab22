var app = angular.module('myMod', []);


app.controller('myCtrl', function($scope, $http) {


$http({
method: 'GET',
url:'/lyrics/mastodon/'
}).then(function(response) {

  console.log(response);
  $scope.lyrics = response;
});

})
