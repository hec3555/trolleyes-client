'use strict';



moduleService.service('sessionService', ['$location', function ($location) {
        var isSessionActive = false;
        var userName = "";
        var userId = "";
        return {
            getUserName: function () {
                return userName;
            },
            setUserName: function (name) {
                userName = name;
            },
            isSessionActive: function () {
                return isSessionActive;
            },
            setSessionActive: function (name) {
                isSessionActive = true;
            },
            setSessionInactive: function (name) {
                isSessionActive = false;
            },
            getId: function () {
                return userId;
            },
            setId: function (id) {
                userId = id;
            }
        };

    }]);