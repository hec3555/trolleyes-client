'use strict'

moduleFactura.controller('facturaPlistController', ['$scope', '$http', '$location', 'toolService',
    function ($scope, $http, $location, toolService) {
        $scope.numeroPagina = "1";
        $scope.numeroRegistrosPagina = "10";        
        
        $scope.limpiar = function () {            
            $scope.numeroPagina = "";
            $scope.numeroRegistrosPagina = "";            
            $scope.cssAlertSuccess = "";            
            $scope.ajaxMensajeFactura = "";
            $scope.ajaxDatoFactura = "";
        }
        
        $http({
            method: "GET",
            withCredential: true,
            url: "http://localhost:8081/trolleyes/json?ob=factura&op=getpage&rpp=" + $scope.numeroRegistrosPagina + "&page=" + $scope.numeroPagina
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoFactura = response.data.message;
        }, function (response) {
            $scope.cssAlertSuccess = "alert alert-danger"
            $scope.ajaxMensajeFactura = "Debes introducir al menos un número";
            $scope.status = response.status;
        });


        $scope.mostrarDatos = function () {
            $http({
                method: "GET",
                withCredential: true,
                url: "http://localhost:8081/trolleyes/json?ob=factura&op=getpage&rpp=" + $scope.numeroRegistrosPagina + "&page=" + $scope.numeroPagina
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDatoFactura = response.data.message;
            }, function (response) {
                $scope.cssAlertSuccess = "alert alert-danger"
                $scope.ajaxMensajeFactura = "Debes introducir al menos un número";
                $scope.status = response.status;
            });
        }

        $scope.isActive = toolService.isActive;

    }
]);