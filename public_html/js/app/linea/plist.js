'use strict'

moduleLinea.controller('lineaPlistController', ['$scope', '$http', '$location', 'toolService',
    function ($scope, $http, $location, toolService) {
        $scope.ruta = $location.path();
        $scope.numeroPagina = "1";
        $scope.numeroRegistrosPagina = "10";
        $scope.ajaxDatoLinea = "";

        $scope.limpiar = function () {
            $scope.numeroPagina = "";
            $scope.numeroRegistrosPagina = "";
            $scope.cssAlertSuccess = "";
            $scope.ajaxMensajeLinea = "";
            $scope.ajaxDatoLinea = "";
        }

        $http({
            method: "GET",
            withCredential: true,
            url: "http://localhost:8081/trolleyes/json?ob=linea&op=getpage&rpp=" + $scope.numeroRegistrosPagina + "&page=" + $scope.numeroPagina
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoLinea = response.data.message;
        }, function (response) {
            $scope.cssAlertSuccess = "alert alert-danger"
            $scope.ajaxMensajeLinea = "Debes introducir al menos un número";
            $scope.status = response.status;
        });


        $scope.mostrarDatos = function () {
            $http({
                method: "GET",
                withCredential: true,
                url: "http://localhost:8081/trolleyes/json?ob=linea&op=getpage&rpp=" + $scope.numeroRegistrosPagina + "&page=" + $scope.numeroPagina
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDatoLinea = response.data.message;
            }, function (response) {
                $scope.cssAlertSuccess = "alert alert-danger"
                $scope.ajaxMensajeLinea = "Debes introducir al menos un número";
                $scope.status = response.status;
            });
        }

        $scope.isActive = toolService.isActive;

    }
]);