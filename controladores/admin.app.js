(function(){
    angular.module('adminApp', ['ui.router'])
            .config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
                $urlRouterProvider.otherwise('/info');
                
                $stateProvider
                    .state('info',{
                    url: '/info',
                    templateUrl: '../views/info.html',
                    controller: 'adminCtrl'
                    
                })
                    .state('adminAddOperador',{
                    url: '/addoperador',
                    templateUrl: '../views/addOperador.html'
                    
                })
                   .state('adminGuardias',{
                    url: '/guardias',
                    templateUrl: '../views/guardias.html'
                })
                
            }]);
    
    
    
}())