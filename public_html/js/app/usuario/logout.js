'use strict';

moduleUsuario.controller('usuarioLogoutController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService) {
        
            $scope.ob = "usuario";
        
       
            
            $http({
                method: 'GET',
                withCredentials: true,
                url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=logout'
            }).then(function (response) {
                $scope.status = response.status;
                
                $location.url("/");
            }, function (response) {
                $scope.msgError= response.data.message || 'Request failed';
                $scope.status = response.status;
                $scope.mensaje = true;
                
            });
        


    }]);