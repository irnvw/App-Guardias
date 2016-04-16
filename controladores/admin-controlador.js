(function(){
  angular.module('adminApp')
    .controller('adminCtrl',['$scope', '$http', function($scope,$http){
                             
             if (localStorage['usuarioLogeado']){
                $scope.Logged = true;
              } else {
                $scope.Logged = false;
                window.location.href = '#/';
              }
  
                             
                             }]);
  
  
  
  
}());