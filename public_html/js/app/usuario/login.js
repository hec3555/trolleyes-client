'use strict';

moduleUsuario.controller('usuarioLoginController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService) {
        
        $scope.ob = "usuario";
        
        $scope.login = function () {
            
            $http({
                method: 'GET',
                withCredentials: true,
                url: 'http://localhost:8081/trolleyes/json?ob='+$scope.ob+'&op=login&user='+$scope.nomUsu+'&pass='+$scope.pass
            }).then(function (response) {
                $scope.status = response.status;
                
                $location.url("/");
            }, function (response) {
                $scope.msgError= response.data.message || 'Request failed';
                $scope.status = response.status;
                $scope.mensaje = true;
                
            });
        };
        $scope.isActive = toolService.isActive;

    }]);


