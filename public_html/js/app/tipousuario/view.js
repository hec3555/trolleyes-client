'use strict';

moduleTipousuario.controller('tipousuarioViewController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {
        $scope.id = $routeParams.id;
        $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob=tipousuario&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataTipoUsuario = response.data.message;
        }, function (response) {
            $scope.ajaxDataTipoUsuario = response.data.message || 'Request failed';
            $scope.status = response.status;
        });

    }]);