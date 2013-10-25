var app = angular.module('myApp', []);

// app.run(function($rootScope) {
//     // $rootScope.test = new Date();
//   $rootScope.person = {name: 'bobbie'};
// });

// app.controller('MyController', function($scope){
//   // $scope.person = {name: 'Shu'};
// });
var apiKey = 'MDEyNDY3NjAxMDEzODI3MzIwMjkwNDgwOA001',
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

app.controller('PlayerController', function($scope, $http) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = 'http://djshu.us/mixes/Live%20@%20Trinity%202012-7-21.mp3';
  // $scope.audio.src = 'http://soundfxnow.com/soundfx/SuperMarioBrothers-Coin.mp3';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };

  $scope.stop = function() {
    console.log('stopped');
    $scope.audio.pause();
    $scope.playing = false;
  };

  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop();
    });
  });

  $http({
    method: 'JSONP',
    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK',
    success: function(data, status){
      $scope.program = data.list.story;
    },
    error: function(data, status){

    }
  });
});

app.controller('RelatedController', ['$scope', function($scope) {
}]);