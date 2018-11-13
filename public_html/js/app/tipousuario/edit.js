'use strict';

moduleTipousuario.controller('tipousuarioEditController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {
        $scope.idC = $routeParams.id;
        $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob=tipousuario&op=get&id=' + $scope.idC
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoTipoUsuario = response.data.message;
        }, function (response) {
            $scope.ajaxDatoUsuario = response.data.message || 'Request failed';
            $scope.status = response.status;
        });


        $scope.guardar = function () {
            var json = {
                id: $scope.ajaxDatoUsuario.id,
                desc: $scope.ajaxDatoTipoUsuario.desc
            };
            $http({
                method: 'GET',
                withCredentials: true,
                url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=update',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                $scope.status = response.status;
                $scope.mensaje = true;
            }, function (response) {
                $scope.ajaxDataUsuario = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
        };

    }]);