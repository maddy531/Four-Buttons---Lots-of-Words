angular.module("myMod",[])
  .controller("myCtrl", function($scope, $interval){

    $scope.heading = 'Silly Words';

    $scope.randomWords = [
    'Tim ',
    'Okay ',
    'Hello ',
    'Random ',
    'Words ',
    'Oops ',
    'Jump on the bandwagon',
    'A miss is as good as a mile',
    'On your beam ends',
    'Thats all she wrote',
    'Dont shoot the messenger'
    ];

    $scope.randomClass=[
      'red ',
      'blue ',
      'size ',
      'newfont ',
      'underline ',
      'spin '
    ];

    $scope.wordsOnPage = [];

    $scope.talk = function(){
      var mixFuncs = [addDecorWord];
      function rando (){
         return mixFuncs[Math.floor(Math.random()*mixFuncs.length)]();
       };

        $interval(rando, 500, 10);
    }


     function addDecorWord(){
      var newElement = {};
      newElement.word =  $scope.randomWords[Math.floor(Math.random()* $scope.randomWords.length)];
      newElement.decor = $scope.randomClass[Math.floor(Math.random()* $scope.randomClass.length)];
      $scope.wordsOnPage.push(newElement);
    }


  });
