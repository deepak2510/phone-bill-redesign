angular.module('myApp',[])

.controller('myCtrl',function($scope){


   $scope.removePaymentMethod = false;
    $scope.paymentDone = false;

    $scope.done = function(){
    
    $scope.paymentDone = true;
    
    }
})



