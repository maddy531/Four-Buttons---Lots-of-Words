angular.module("myMod",[])
  .controller("myCtrl", function($scope){

    $scope.randomWords = [
    'Tim ',
    'Okay ',
    'Hello ',
    'Random ',
    'Words ',
    'Oops '
    ];

    $scope.wordsOnPage = [];
    $scope.addWord = function (){
      var item =
      $scope.randomWords[Math.floor(Math.random()* $scope.randomWords.length)];
      $scope.wordsOnPage.push(item);

    }



  });
