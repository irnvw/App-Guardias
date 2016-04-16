(function(){
    angular.module('Guardias')
    .controller('control-logueo', ['$scope', '$http', function($scope, $http){
                $scope.loginUsr = function(){
                    
                    $scope.msg = 'Se esta procesando el login!!';
                    
                                       
                    $http.post('usuario/login', $scope.logon).success(function(response){
                        
                       
                      if (response == "Logged")   
                      
                        { console.log("--Logeado--");
                          $scope.msg='Congratulado';                                         //$scope.Logged=true;    
                         localStorage.setItem('usuarioLogeado', response);
                          
                          window.location.href = "/admin";
                         
                         
                        } else {
                          
                          console.log("--No Logeado--");
                          $scope.msg='No no no, intente nuevamente..';
                          $scope.Logged=false;
                        }
                        
                        
                    }).error(function(error){
                         console.log("--Error---");
                        console.error(error);
                    });
                    
                }
        
        
    }]);
    
}());