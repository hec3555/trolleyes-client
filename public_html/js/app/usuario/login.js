'use strict';

moduleUsuario.controller('usuarioLoginController', ['$scope', '$http', '$location', 'toolService', '$routeParams','sessionService',
    function ($scope, $http, $location, toolService, oSessionService) {
        
        $scope.ob = "usuario";
        
        $scope.login = function () {
            
            $http({
                method: 'GET',
                withCredentials: true,
                url: 'http://localhost:8081/trolleyes/json?ob='+$scope.ob+'&op=login&user='+$scope.nomUsu+'&pass='+forge_sha256($scope.pass)
            }).then(function (response) {
                if(response.status === 200){
                $scope.status = response.status;
                oSessionService.setSessionActive;
                oSessionService.setUserName(response.data.message.nombre + " " +response.data.message.ape1);
                oSessionService.setId(response.data.message.id);
                $scope.logged = true;
                $location.url("/");
            }
            }, function (response) {
                $scope.msgError= response.data.message || 'Request failed';
                $scope.status = response.status;
                $scope.mensaje = true;
                
            });
        };
        $scope.isActive = toolService.isActive;

    }]);


