'use strict';

moduleUsuario.controller('usuarioNewController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {
//        $scope.idC = $routeParams.id;
//        $http({
//            method: 'GET',
//            url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=get&id=' + $scope.idC
//        }).then(function (response) {
//            $scope.status = response.status;
//            $scope.ajaxDatoUsuario = response.data.message;
//        }, function (response) {
//            $scope.ajaxDatoUsuario = response.data.message || 'Request failed';
//            $scope.status = response.status;
//        });


        $scope.guardar = function () {
            var json = {
                id: null,
                dni: $scope.ajaxDatoUsuario.dni,
                nombre: $scope.ajaxDatoUsuario.nombre,
                ape1: $scope.ajaxDatoUsuario.ape1,
                ape2: $scope.ajaxDatoUsuario.ape2,
                login: $scope.ajaxDatoUsuario.login,
                pass: "",
                id_tipoUsuario: $scope.ajaxDatoUsuario.obj_tipoUsuario.id
            };
            $http({
                method: 'GET',
                withCredentials: true,
                url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=create',
                params: {json: JSON.stringify(json)}
            }).then(function (response) {
                $scope.status = response.status;
                $scope.mensaje = true;
            }, function (response) {
                $scope.resultado = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
        };

    }]);

