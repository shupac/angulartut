var app = angular.module('myApp', []);

// app.run(function($rootScope) {
//     // $rootScope.test = new Date();
//   $rootScope.person = {name: 'bobbie'};
// });

// app.controller('MyController', function($scope){
//   // $scope.person = {name: 'Shu'};
// });

app.controller('PlayerController', ['$scope', function($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = 'http://djshu.us/mixes/Live%20@%20Trinity%202012-7-21.mp3';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);