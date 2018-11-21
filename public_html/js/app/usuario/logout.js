'use strict';

moduleUsuario.controller('usuarioLogoutController', ['$scope', '$http', '$location', 'toolService', '$routeParams','sessionService',
    function ($scope, $http, $location, toolService, oSessionService) {
        
            $scope.ob = "usuario";
        
       
            
            $http({
                method: 'GET',
                withCredentials: true,
                url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=logout'
            }).then(function (response) {
                $scope.status = response.status;
                oSessionService.setSessionInactive();
                oSessionService.setUserName("");
                $location.url("/");
            }, function (response) {
                $scope.msgError= response.data.message || 'Request failed';
                $scope.status = response.status;
                $scope.mensaje = true;
                
            });
        


    }]);