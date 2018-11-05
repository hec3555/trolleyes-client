'use strict'

moduleUsuario.controller('usuarioPlistController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {

        $scope.totalPages = 1;


        if (!$routeParams.order) {
            $scope.order = 1;
        } else {
            $scope.order = $routeParams.order;
        }

        if (!$routeParams.align) {
            $scope.align = 'asc';
        } else {
            $scope.align = $routeParams.align;
        }

        if (!$routeParams.rpp) {
            $scope.rpp = 10;
        } else {
            $scope.rpp = $routeParams.rpp;
        }

        if (!$routeParams.page) {
            $scope.page = 1;
        } else {
            if ($routeParams.page >= 1) {
                $scope.page = $routeParams.page;
            } else {
                $scope.page = 1;
            }
        }



        //getcount
        $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=getcount'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataUsuariosNumber = response.data.message;
            $scope.totalPages = Math.ceil($scope.ajaxDataUsuariosNumber / $scope.rpp);
            pagination2();
       /*     $scope.list = [];
            for (var i = 1; i <= $scope.totalPages; i++) {
                $scope.list.push(i);
            }*/
        }, function (response) {
            $scope.ajaxDataUsuariosNumber = response.data.message || 'Request failed';
            $scope.status = response.status;
        });



        //getpage
        $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=getpageordered&rpp=' + $scope.rpp + '&page=' + $scope.page + '&order=' + $scope.order + '&align=' + $scope.align
        }).then(function (response) {
            $location.url(`usuario/plist/` + $scope.rpp + `/` + $scope.page + `/` + $scope.order + `/` + $scope.align);
            $scope.status = response.status;
            $scope.ajaxDataUsuarios = response.data.message;
        }, function (response) {
            $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
            $scope.status = response.status;
        });



        //getpageordered
        $scope.ordena = function (order, align) {
            $http({
                method: 'GET',
                url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=getpageordered&rpp=' + $routeParams.rpp + '&page=' + $scope.page + '&order=' + order + '&align=' + align
            }).then(function (response) {
                $location.url(`usuario/plist/` + $routeParams.rpp + `/1/` + order + `/` + align);
                $scope.status = response.status;
                $scope.ajaxDataUsuarios = response.data.message;
            }, function (response) {
                $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
        }

        //combobox paginacion
        $scope.update = function () {
            $http({
                method: 'GET',
                url: `http://localhost:8081/trolleyes/json?ob=usuario&op=getpage&rpp=${$scope.selectedItem}&page=1`
            }).then(function (response) {
                $location.url(`usuario/plist/${$scope.selectedItem}/1`);
                $scope.status = response.status;
                $scope.ajaxDataUsuarios = response.data.message;
            }, function (response) {
                $scope.ajaxDataUsuarios = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
        }

        //paginacion neighborhood
        function pagination2() {
            $scope.list2 = [];
            $scope.neight = Math.ceil($scope.page);
            $scope.negith_next = $scope.neight + 1;
            $scope.negith_prev = $scope.neight - 1;

            $scope.aux1 = $scope.negith_next + 1;
            $scope.aux2 = $scope.negith_prev - 1;

            for (var i = 1; i <= $scope.totalPages; i++) {
                if (i === $scope.negith_next) {
                    $scope.list2.push(i);
                } else if (i === $scope.negith_prev) {
                    $scope.list2.push(i);
                } else if (i === $scope.neight) {
                    $scope.list2.push(i);
                } else if (i === $scope.aux1) {
                    $scope.list2.push("...");
                } else if (i === $scope.aux2) {
                    $scope.list2.push("...");
                }
            }
        }

        $scope.isActive = toolService.isActive;
    }
]);